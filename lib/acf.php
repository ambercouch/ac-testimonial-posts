<?php
if( function_exists('acf_add_local_field_group') ):

    acf_add_local_field_group(array(
        'key' => 'group_5d3f4a4b36024',
        'title' => 'Testimonial Info',
        'fields' => array(
            array(
                'key' => 'field_5d3f4a57202bd',
                'label' => 'Testimonial Title',
                'name' => 'testimonial_title',
                'type' => 'text',
                'instructions' => 'This will override the main post title',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5d3f4a90202be',
                'label' => 'Testimonial intro',
                'name' => 'testimonial_intro',
                'type' => 'textarea',
                'instructions' => 'Short intro before the main body content',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'maxlength' => '',
                'rows' => 2,
                'new_lines' => 'br',
            ),
            array(
                'key' => 'field_5d3f4ae2202bf',
                'label' => 'Testimonial Citation',
                'name' => 'testimonial_citation',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'ac-testimonial',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'excerpt',
            1 => 'discussion',
            2 => 'comments',
            3 => 'format',
            4 => 'page_attributes',
            5 => 'tags',
            6 => 'send-trackbacks',
        ),
        'active' => true,
        'description' => '',
    ));

endif;