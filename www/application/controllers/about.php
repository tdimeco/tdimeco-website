<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * About page controller
 */
class About extends CI_Controller
{
	public function index ()
	{   
		/* Set layout properties */
		$this->layout->setTitle('À propos');
		$this->layout->setSelectedTab('about');
		$this->layout->addStyle('about');

		/* Load page content */
		$this->layout->loadPageContent('about');
	}
}
