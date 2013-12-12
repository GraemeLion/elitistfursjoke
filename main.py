""" main.py is the top level script.

Return "Hello World" at the root URL.
"""

import os
import sys

# sys.path includes 'server/lib' due to appengine_config.py
from flask import Flask
from flask import render_template, send_file
app = Flask(__name__.split('.')[0])


@app.route('/')
def hello():
  """ Return hello template at application root URL."""
  return send_file('templates/hello.html')


