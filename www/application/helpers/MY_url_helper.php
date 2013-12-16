<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');


/**
 * URL helper additions
 */

if ( ! function_exists('css_url'))
{
	function css_url($name)
	{
		return base_url() . 'static/css/' . $name . '.css';
	}
}

if ( ! function_exists('less_url'))
{
	function less_url($name)
	{
		return base_url() . 'static/css/' . $name . '.less';
	}
}

if ( ! function_exists('js_url'))
{
	function js_url($name)
	{
		return base_url() . 'static/javascript/' . $name . '.js';
	}
}

if ( ! function_exists('img_url'))
{
	function img_url($name)
	{
		return base_url() . 'static/images/' . $name;
	}
}

if ( ! function_exists('img'))
{
	function img($name, $title = '')
	{
		return '<img src="' . img_url($name) . '" title="' . $title . '" alt="' . $title . '" />';
	}
}

if ( ! function_exists('url'))
{
	function url($text, $uri = '')
	{	
		return '<a href="' . site_url($uri) . '">' . $text . '</a>';
	}
}

if ( ! function_exists('currentLanguageURL'))
{
	function currentLanguageURL($lang = '')
	{	
		$CI =& get_instance();
		$languageAbbr = $CI->config->item('language_abbr');

		$indexPage = preg_replace("|\/?$languageAbbr$|", '', index_page());
		$uri = uri_string();

		if (empty($indexPage) && empty($lang)) {
			$uri = preg_replace("|^\/?|", '', $uri);
		} else if (!empty($lang) && !empty($indexPage)) {
			$lang = '/'.$lang;
		}

		return base_url().$indexPage.$lang.$uri;
	}
}
