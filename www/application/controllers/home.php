<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Home page controller
 */
class Home extends CI_Controller
{
	public function index ()
	{
		/* Load language file */
		$this->lang->load('home');

		/* Set layout properties */
		$this->layout->setTitle( t('home.title') );
		$this->layout->setSelectedTab('home');
		$this->layout->addStyle('home');

		/* Load page content */
		$this->layout->loadPageContent('home');
	}
}
