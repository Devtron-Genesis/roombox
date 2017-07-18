<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function roombox_preprocess_page(&$vars, $hook) {
  if (isset($vars['node'])) {
    if (isset($vars['node']->type)) {
      $nodetype = $vars['node']->type;
      $vars['theme_hook_suggestions'][] = 'page__' . $nodetype;
      $vars['theme_hook_suggestions'][] = 'page__node__' . str_replace('_', '--', $vars['node']->type);
      $vars['theme_hook_suggestions'][] = 'page__node__' . $vars['node']->nid;
    }
  }
}
function roombox_preprocess_html(&$vars, $hook) {
	global $base_url;
	// drupal_add_css('https://roombox.com/import/override.css', array('type' => 'external', 'group' => CSS_THEME, 'every_page' => TRUE));
}
function roombox_theme() {
  return array(
    'twitter_pull_listing_2' => array(
      'arguments' => array('tweets' => NULL, 'twitkey' => NULL, 'title' => NULL),
      'template' => 'twitter-pull-listing-2'
    ),
  );
}
