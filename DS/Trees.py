class Tree:
    def __init__(self, root):
        self.root = root
        self.children = []
        self.parent = None
        self.depth = 0
        self.height = 0
        self.size = 0
        self.isLeaf = False
        self.isRoot = False
    
    def addChild(self, child):
        self.children.append(child)
        child.parent = self
        child.depth = self.depth + 1
        self.size += 1
        if child.depth > self.height:
            self.height = child.depth

    def printTree(self):
        print(self.root)
        for child in self.children:
            child.printTree()
    
    def removeChild(self, child):
        self.children.remove(child)
        child.parent = None
        child.depth = 0
        self.size -= 1
        if child.depth == self.height:
            self.height -= 1
    
    def getRoot(self):
        return self.root
    
    
    def getChildren(self):
        return self.children
    
    def getParent(self):
        return self.parent
    
    def getDepth(self):
        return self.depth
    
    def getHeight(self):
        return self.height
    
    def getSize(self):
        return self.size
    
    def getIsLeaf(self):
        return self.isLeaf
    
    def getIsRoot(self):
        return self.isRoot
    

t = Tree(1)
t.addChild(Tree(2))
t.addChild(Tree(3))
t.addChild(Tree(4))
t.addChild(Tree(5))
t.addChild(Tree(6))
t.printTree()
print(t.getSize())
print(t.getHeight())
print(t.getRoot())
print(t.getChildren())
t.removeChild(t.getChildren()[0])
t.printTree()

        