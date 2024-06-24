#!/usr/bin/env python3
"""a module for simple helper function"""


def index_range(page, page_size):
    """ a function for simple helper function"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
