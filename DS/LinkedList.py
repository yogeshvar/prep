class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    
class LinkedList:
    def __init__(self):
        self.head = None
    
    def printList(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next
    
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node
    
    def insert_after(self, prev_node, new_data):
        if prev_node is None:
            print("The given previous node must in LinkedList")
            return
        new_node = Node(new_data)
        new_node.next = prev_node.next
        prev_node.next = new_node
    
    def append(self, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
    
    def delete_node(self, key):
        temp = self.head
        if temp is not None:
            if temp.data == key:
                self.head = temp.next
                temp = None
                return
        while temp is not None:
            if temp.data == key:
                break
            prev = temp
            temp = temp.next
        if temp == None:
            return
        prev.next = temp.next
        temp = None
    
    def delete_node_at_pos(self, pos):
        if self.head == None:
            return
        temp = self.head
        if pos == 0:
            self.head = temp.next
            temp = None
            return
        for i in range(pos - 1):
            temp = temp.next
            if temp is None:
                break
        if temp is None:
            return
        if temp.next is None:
            return
        next = temp.next.next
        temp.next = None
        temp.next = next
    
    def delete_list(self):
        current = self.head
        while current:
            prev = current.next
            del current.data
            current = prev
        self.head = None
    
    def get_count(self):
        temp = self.head
        count = 0
        while temp:
            count += 1
            temp = temp.next
        return count
    
    def search(self, key):
        temp = self.head
        while temp:
            if temp.data == key:
                return True
            temp = temp.next
        return False
    
    def get_nth(self, index):
        current = self.head
        count = 0
        while current:
            if count == index:
                return current.data
            count += 1
            current = current.next
        return None
    
    def get_nth_from_end(self, index):
        length = self.get_count()
        if index > length:
            return None
        current = self.head
        for i in range(length - index):
            current = current.next
        return current.data
    
    def print_reverse(self):
        if self.head is None:
            return
        self.print_reverse(self.head.next)
        print(self.head.data)
    
    def reverse(self):
        prev = None
        current = self.head
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev
    
    def reverse_v2(self, node):
        if node.next is None:
            self.head = node
            return
        self.reverse_v2(node.next)
        temp = node.next
        temp.next = node
        node.next = None
    

ll = LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
print("Created Linked List: ")
ll.printList()
print("Insert 5 after 3: ")
ll.insert_after(ll.head.next.next, 5)
ll.printList()
print("Append 6: ")
ll.append(6)
ll.printList()
print("Delete 5: ")
ll.delete_node(5)
ll.printList()
print("Delete node at position 2: ")
ll.delete_node_at_pos(2)
ll.printList()
print("Delete entire list: ")
ll.delete_list()
ll.printList()
print("Push 1, 2, 3, 4, 5, 6: ")
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
ll.push(6)
ll.printList()
print("Count: ")
print(ll.get_count())
print("Search 3: ")
print(ll.search(3))
print("Search 7: ")
print(ll.search(7))
print("Get 3rd element: ")
print(ll.get_nth(3))
print("Get 3rd element from end: ")
print(ll.get_nth_from_end(3))
print("Reverse: ")
ll.reverse()
ll.printList()
print("Reverse v2: ")
ll.reverse_v2(ll.head)
ll.printList()
print("Print reverse: ")
ll.print_reverse()



    