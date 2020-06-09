"""This task that qualifies an intern to stage 2."""

def task(fullname, hngid, lang, email):
    return print(f"Hello World, this is {fullname} with HNGi7 ID {hngid} and email {email} using {lang} for stage 2 task", flush= True)

fullname= 'Philip Ireoluwa Okiokio'
hngid= 'HNG-00037'
lang= 'Python'
email= 'philipokiokiocodes@gmail.com'

task(fullname,hngid,lang, email)
