# seting global variables for the functions
hngId = 'HNG-03960'
fullName = 'Ramko Nanjul'
language = 'Python3'
email = 'ramkodgreat@gmail.com'

def taskOutput(fullName,hngId, email, language):
    """ function to return some string"""
    return  print('Hello World, this is {fullName} with HNGi7 ID {hngId} and email {email} using {language} for stage 2 task'.format(fullName=fullName, hngId=hngId, email=email, language=language))


task2 = taskOutput(fullName, hngId, email, language)

