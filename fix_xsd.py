import fileinput
import glob
import sys
from lxml import etree
from io import StringIO

files = []

for filename in glob.glob('./**/*.xsd', recursive=True):
  with open(filename, 'a+') as f:
    # print(schema_to_check)
    try:
      xmlschema_doc = etree.parse(StringIO(schema_to_check))
    except:
      print(filename)
      files.append(filename)
      f.write(" -->")

for filename in files:
  with open(filename, 'r+') as f:
    f.write("<!-- ")

