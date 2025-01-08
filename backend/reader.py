def replace_with_underscore(char, expr):
  """
  Replaces the character 'char' with an underscore if the given 'expr' evaluates to False.

  Args:
    char: The character to potentially replace.
    expr: The boolean expression to evaluate.

  Returns:
    The original character if 'expr' is True, otherwise an underscore ('_').
  """
  return char if expr else '_'

ilst = {
  "sku": "VA-43",
  "size": "5ft",
  "name": "Blue Sky",
  "description": "A great product!"
}

for key in ilst:
  if key != "description":
    if key == "size":
      ilst[key] = "1.524m"
    else:
      ilst[key] = ilst[key].lower()
      ilst[key] = ''.join(map(lambda char: replace_with_underscore(char, char.isalnum() or char in ['_', '.']), ilst[key]))
      if len(ilst[key]) > 10:
        ilst[key] = ilst[key][:10] + "..."

print(ilst)