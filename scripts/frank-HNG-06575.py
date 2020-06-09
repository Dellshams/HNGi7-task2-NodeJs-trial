# -*- coding: utf-8 -*-
"""
Created on Fri Jun  4 12:04:38 2020

@author: Osariemen Osaretin Frank
"""

class HNGi7(object):
    def __init__(self, name, hngi7_id, email, lang):
        self.name = name
        self.id = hngi7_id
        self.lang = lang
        self.email = email
    def output(self):
        return 'Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task'.format(self.name, self.id, self.email, self.lang)

details = HNGi7('Osaretin Frank', 'HNG-06575','lightfree8@gmail.com', 'Python')
print(details.output())
        


