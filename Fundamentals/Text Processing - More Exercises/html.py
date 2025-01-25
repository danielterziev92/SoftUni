title = input()
article = input()
comments = list()
command = input()
while command != "end of comments":
    comments.append(command)
    command = input()
print(f"""<h1>
    {title}
</h1>
<article>
    {article}
</article>""")
for comment in comments:
    print(f"""<div>
    {comment}
</div>""")