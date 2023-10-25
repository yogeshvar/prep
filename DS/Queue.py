class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item): # O(1)
        self.items.insert(0,item)

    def dequeue(self): # O(1)
        return self.items.pop()

    def size(self):
        return len(self.items)
    
    def printQueue(self):
        print(self.items)
        
q = Queue()
q.enqueue(4)
q.enqueue('dog')
q.enqueue(True)
print(q.size())
q.printQueue()
print(q.dequeue())
print(q.dequeue())
print(q.size())
