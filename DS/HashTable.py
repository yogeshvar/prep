class HashTable:
    def __init__(self):
        self.table = {}

    def add(self, key, value):
        self.table[key] = value
        
    def hash(self, key):
        return key % len(self.table)
    
    def get(self, key):
        return self.table[key]
    
    def remove(self, key):
        del self.table[key]
    
    def exists(self, key):
        return key in self.table

    def print_table(self):
        print(self.table)
    
hash_table = HashTable()
hash_table.add(1, 'one')
hash_table.add(2, 'two')
hash_table.add(3, 'three')
hash_table.add(4, 'four')
hash_table.add(5, 'five')
hash_table.get(1)
hash_table.get(2)
hash_table.print_table()
hash_table.remove(1)
hash_table.print_table()