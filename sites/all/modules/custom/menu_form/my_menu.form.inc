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
 		'#required' => TRUE,
 	);
  	$form['User']['l_name'] = array(
 		'#type' => 'textfield',
 		'#title' => t('First Name'),
 		'#required' => TRUE,
 	);
  	$form['User']['email'] = array(
 		'#type' => 'textfield',
 		'#title' => t('Email'),
 		'#required' => TRUE,
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
	$cd = implode($form_state['values']['c_date']);
	$ccd = date('m-d-Y',$cd);
	$db = implode($form_state['values']['date_of_birth']);
	$cdb = date('m-d-Y',$db);
	$uid = db_insert('visitor_info')
		->fields(array(
			'fname' => $form_state['values']['f_name'],
			'lname' => $form_state['values']['l_name'],
			'uemail' => $form_state['values']['email'],
			'cdate' => $cd,
			'dob' => $db,
		))
	->execute();
	drupal_set_message('Form is Submitted.');
}