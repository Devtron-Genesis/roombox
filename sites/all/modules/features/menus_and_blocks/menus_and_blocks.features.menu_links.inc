<?php
/**
 * @file
 * menus_and_blocks.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function menus_and_blocks_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_about:<void>.
  $menu_links['main-menu_about:<void>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<void>',
    'router_path' => '<void>',
    'link_title' => 'About',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'unaltered_hidden' => 0,
      'external' => TRUE,
      'identifier' => 'main-menu_about:<void>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
  );
  // Exported menu link: main-menu_contact:<void>.
  $menu_links['main-menu_contact:<void>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<void>',
    'router_path' => '<void>',
    'link_title' => 'Contact',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'unaltered_hidden' => 0,
      'external' => TRUE,
      'identifier' => 'main-menu_contact:<void>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
  );
  // Exported menu link: main-menu_customiser:<void>.
  $menu_links['main-menu_customiser:<void>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<void>',
    'router_path' => '<void>',
    'link_title' => 'Customiser',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'unaltered_hidden' => 0,
      'external' => TRUE,
      'identifier' => 'main-menu_customiser:<void>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Exported menu link: main-menu_home:<front>.
  $menu_links['main-menu_home:<front>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Home',
    'options' => array(
      'external' => 0,
      'identifier' => 'main-menu_home:<front>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );
  // Exported menu link: main-menu_information:<void>.
  $menu_links['main-menu_information:<void>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<void>',
    'router_path' => '<void>',
    'link_title' => 'Information',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'unaltered_hidden' => 0,
      'external' => TRUE,
      'identifier' => 'main-menu_information:<void>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('About');
  t('Contact');
  t('Customiser');
  t('Home');
  t('Information');

  return $menu_links;
}
