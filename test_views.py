import pytest
import unittest

from flask import render_template, Flask, request, jsonify, session, redirect, url_for, flash
from routes import index, scheduleMaker
from app import app


class FlaskTestCase(unittest.TestCase):

	# ensure that flask was set up the index page correctly
	def test_views_index(self):
		tester = app.test_client(self)
		response = tester.get('/', content_type = 'html/text')
		self.assertEqual(response.status_code,200)

	# ensure that the index page loads correctly
	def test_views_index_load(self):
		tester = app.test_client(self)
		response = tester.get('/', content_type = 'html/text')
		self.assertTrue(b'Gold Scheduler' in response.data)


	#ensure that flask was set up the course selection page correctly
	def test_views_scheduleMaker(self):
		tester = app.test_client(self)
		response = tester.get('/class-select', content_type = 'html/text')
		self.assertEqual(response.status_code,200)

	def test_views_scheduleMaker_load(self):
		tester = app.test_client(self)
		response = tester.get('/', content_type = 'html/text')
		self.assertTrue(b'Subject:' in response.data)


if __name__ == '__main__':
	unittest.main()

