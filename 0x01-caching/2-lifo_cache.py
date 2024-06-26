#!/usr/bin/env python3
'''a module to perform lifo'''
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    '''a class for lifo'''
    def __init__(self):
        """ Initialize the class """
        super().__init__()
        self.order = []  # List to keep track of the order of keys

    def put(self, key, item):
        """ Add an item in the cache """
        if key is not None and item is not None:
            if key in self.cache_data:
                # Remove the key if it already exists to update its
                self.order.remove(key)
            self.cache_data[key] = item
            self.order.append(key)
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                # Remove the last item added (LIFO)
                last_key = self.order.pop()
                del self.cache_data[last_key]
                print(f"DISCARD: {last_key}")

    def get(self, key):
        """ Get an item by key """
        return self.cache_data.get(key, None)
