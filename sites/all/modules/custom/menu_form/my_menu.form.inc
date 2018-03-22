<?php

 function menu_form_basic() {
  $form = array();

  $form['User'] = array(
    '#type' => 'fieldset',
    '#title' => t('User Data'),
  );
    $form['User']['f_name'] = array(
    '#type' => 'textfield',
    '#title' => t('First Name'),
  );
    $form['User']['l_name'] = array(
    '#type' => 'textfield',
    '#title' => t('First Name'),
  );
    $form['User']['email'] = array(
    '#type' => 'textfield',
    '#title' => t('Email'),
  );
  $form['User']['Gen'] = array(
    '#type' => 'radios',
    '#title' => t('Your Gen'),
    '#options' => array(
      0 => t('Men'),
      1 => t('Woment'),
      2 => t('Other'),
    ), 
    );
    $form['User']['Language'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Your Language'),
    '#options' => array(
      0 => t('English'),
      1 => t('French'),
      2 => t('Urdu'),
    ), 
    );
    $form['User']['Nationality'] = array(
    '#type' => 'select',
    '#title' => t('Your nationality'),
    '#options' => array(
      0 => t('America'),
      1 => t('France'),
      2 => t('Pakistan'),
    ), 
    );
    $form['User']['c_date'] = array(
    '#type' => 'date',
    '#title' => t('Current Date'),
    '#required' => TRUE,
    '#disabled' => TRUE,
  );
    $form['User']['date_of_birth'] = array(
    '#type' => 'date',
    '#title' => t('Date Of Birth'),
    '#required' => TRUE,
  );
    $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('SUBMIT'),
  );
  return $form;
 }

function menu_form_basic_validate($form, $form_state) {
  $mail = $form_state['values']['email'];
  if (!valid_email_address($mail)) {
      form_set_error('email', t('The email address appears to be invalid.'));
    }
}
function menu_form_basic_submit($form, $form_state) {

  global $user;
  $timezone = $user->timezone;
  $tz = new DateTimeZone($timezone);
  
  $cdate = $form_state['values']['c_date'];
  $submittedDate = "{$cdate['year']}-{$cdate['month']}-{$cdate['day']}";
  $newdate = new DateTime($submittedDate, $tz);
  $ccdate = $newdate->getTimestamp(); 

  $dob = $form_state['values']['date_of_birth'];
  $submittedDate = "{$dob['year']}-{$dob['month']}-{$dob['day']}";
  $newdate = new DateTime($submittedDate, $tz);
  $cdob = $newdate->getTimestamp();

  $langu = implode(" ",$form_state['values']['Language']);
  
  $uid = db_insert('user_inf')
    ->fields(array(
      'fname' => $form_state['values']['f_name'],
      'lname' => $form_state['values']['l_name'],
      'uemail' => $form_state['values']['email'],
      'cdate' => $ccdate,
      'dob' => $cdob,
      'Language' => $langu,
      'gen' => $form_state['values']['Gen'],
      'nationality' => $form_state['values']['Nationality'],
    ))
  ->execute();
  drupal_set_message('Your Data is submitted');
}