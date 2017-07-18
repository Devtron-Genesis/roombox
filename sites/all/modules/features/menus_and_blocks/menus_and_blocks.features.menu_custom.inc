<?php
/**
 * @file
 * menus_and_blocks.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function menus_and_blocks_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: main-menu.
  $menus['main-menu'] = array(
    'menu_name' => 'main-menu',
    'title' => 'Main menu',
    'description' => 'The <em>Main</em> menu is used on many sites to show the major sections of the site, often in a top navigation bar.',
  );
  // Exported menu: menu-bottom-footer-menu.
  $menus['menu-bottom-footer-menu'] = array(
    'menu_name' => 'menu-bottom-footer-menu',
    'title' => 'Bottom Footer Menu',
    'description' => 'Bottom Footer Menu',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Bottom Footer Menu');
  t('Main menu');
  t('The <em>Main</em> menu is used on many sites to show the major sections of the site, often in a top navigation bar.');

  return $menus;
}
