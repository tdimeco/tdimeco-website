<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Terms page controller
 */
class Terms extends CI_Controller
{
	public function index ()
	{
		/* Set layout properties */
		$this->layout->setTitle('Mentions légales');
		$this->layout->addStyle('terms');

		/* Load page content */
		$this->layout->loadPageContent('terms');
	}
}
