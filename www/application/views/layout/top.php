<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?= $languageAbbr; ?>">
<head>

	<meta http-equiv="content-type" content="application/xhtml+xml; charset=utf-8" />
	<meta http-equiv="content-language" content="<?= $languageAbbr; ?>" />

	<meta name="author" content="Thomas Di'Meco" />
	<meta name="copyright" content="Thomas Di'Meco" />
	<meta name="publisher" content="Thomas Di'Meco" />
	<meta name="language" content="<?= $languageAbbr; ?>" />
	<meta name="robots" content="index,follow" />

<?php if (base_url() == current_url()) { ?>
	<meta name="identifier-url" content="<?= base_url(); ?>" />
	<meta name="google-site-verification" content="d8Qmx2YBRqQbp6lV6CoMnqyMMbggqh_kkqZ2IDxCWqc" />

<?php } ?>
	<meta name="description" content="<?= t('layout.head.description'); ?>" />
	<meta name="keywords" content="thomas,dimeco,di'meco,di meco" />

	<title><?= !is_null($layoutTitle) ? $layoutTitle : ''; ?></title>

	<link rel="shortcut icon" type="image/x-icon" href="<?= img_url('favicon.png'); ?>" />

<?php foreach ($layoutStyles as $style) { ?>
	<link rel="stylesheet/less" type="text/css" media="all" href="<?= less_url($style); ?>" />
<?php } ?>

	<script type="text/javascript" src="<?= js_url('less-1.7.3.min'); ?>"></script>

</head>
<body>
	<div id="site-content">
		<div id="header">
			<div id="header-logo"><a href="<?= site_url(); ?>"><?= img('logo.png'); ?></a></div>
			<div id="header-text">&mdash;&nbsp;&nbsp;<?= t('layout.top.website'); ?>&nbsp;&nbsp;&mdash;</div>
		</div>
		<div id="nav">
			<ol id="nav-tabs">
				<li<?= $layoutSelectedTab == 'home'  ? ' class="selected"' : '' ?>><a href="<?= site_url(); ?>"><?= t('layout.page.home'); ?></a></li>
				<li<?= $layoutSelectedTab == 'about' ? ' class="selected"' : '' ?>><a href="<?= site_url('about'); ?>"><?= t('layout.page.about'); ?></a></li>
			</ol>
			<ol id="nav-flags">
				<li><a class="en-flag" href="<?= currentLanguageURL('en'); ?>" title="English"></a></li>
				<li><a class="fr-flag" href="<?= currentLanguageURL(); ?>" title="Français"></a></li>
			</ol>
			<ol id="nav-icons">
				<li><a class="email-icon" href="<?= site_url('about#contact'); ?>" title="Contact"><span></span></a></li>
				<li><a class="flickr-icon" href="https://www.flickr.com/photos/tdimeco/" title="Flickr"><span></span></a></li>
				<li><a class="twitter-icon" href="https://twitter.com/thomasdimeco" title="Twitter"><span></span></a></li>
				<li><a class="github-icon" href="https://github.com/tdimeco" title="GitHub"><span></span></a></li>
				<li><a class="linkedin-icon" href="https://www.linkedin.com/pub/thomas-di-meco/60/329/500" title="LinkedIn"><span></span></a></li>
				<li style="display:none;"><a href="https://plus.google.com/117221351543879699596?rel=author" title="Google+"><span></span></a></li>
			</ol>
		</div>
		<div id="page-content">
<!-- Start page content -->
