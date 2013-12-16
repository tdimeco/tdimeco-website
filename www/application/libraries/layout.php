<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Layout class
 * Manage and load the page layout
 */
class Layout
{
	private $CI;
	private $title;
	private $selectedTab;
	private $styles;

	public function __construct()
	{
		$this->CI = get_instance();

		$this->title = null;
		$this->selectedTab = null;
		$this->styles = array('main');
	}

	/**
	 * Load the layout with a page content view
	 * Parameters :
	 *     $view (string) : The view name to load
	 *     $data (array)  : The view data array
	 */
	public function loadPageContent ($view, $data = array())
	{
		/* Load language file */
		$this->CI->lang->load('layout');

		/* Add data to array */
		$data['layoutTitle'] = $this->title;
		$data['layoutSelectedTab'] = $this->selectedTab;
		$data['layoutStyles'] = $this->styles;

		$data['language'] = $this->CI->config->item('language');
		$data['languageAbbr'] = $this->CI->config->item('language_abbr');

		/* Load the template */
		$this->CI->load->view('layout/top', $data);
		$this->CI->load->view($view, $data);
		$this->CI->load->view('layout/bottom', $data);
	}

	/**
	 * Set the page title
	 * Parameters :
	 *    $title (string) : The page title
	 */
	public function setTitle ($title)
	{
		$this->title = $title;
	}

	/**
	 * Set the page selected tab in the nav bar
	 * Parameters :
	 *    $tab (string) : The selected tab string
	 */
	public function setSelectedTab ($tab)
	{
		$this->selectedTab = $tab;
	}

	/**
	 * Add a style list to the page
	 * Parameters :
	 *    $style (array/string) : The new style array to add or a single style file to add
	 */
	public function addStyle ($style = array())
	{
		if (is_array($style)) {
			foreach ($style as $i) {
				$this->styles[] = $i;
			}
		} else if (is_string($style)) {
			$this->styles[] = $style;
		}
	}
}
