<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Error pages controller
 */
class Error extends CI_Controller
{
	public function error_404 ()
	{
		header("HTTP/1.1 404 Not Found");

		/* Set layout properties */
		$this->layout->setTitle('Erreur 404');

		/* Load page content */
		$this->layout->loadPageContent('errors/404');
	}
}
