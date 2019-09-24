<?php
if (!function_exists('ac_wp_testimonial_posts'))
{

    //Testimonial Post Type
    function ac_wp_testimonial_posts()
    {

        $labels = array(
            'name' => _x('Testimonials', 'post type general name'),
            'singular_name' => _x('Testimonial', 'post type singular name'),
            'add_new' => _x('Add New', 'Testimonial'),
            'add_new_item' => __('Add New Testimonial'),
            'edit_item' => __('Edit Testimonial'),
            'new_item' => __('New Testimonial'),
            'all_items' => __('All Testimonials'),
            'view_item' => __('View Testimonial'),
            'search_items' => __('Search Testimonials'),
            'not_found' => __('No Testimonials found'),
            'not_found_in_trash' => __('No Testimonials found in the trash'),
            'parent_item_colon' => '',
            'menu_name' => 'Testimonials'
        );
        $args = array(
            'labels' => $labels,
            'menu_icon' => 'dashicons-format-quote',
            'description' => 'Testimonials offered',
            'public' => true,
            'menu_position' => 20,
            'supports' => array('title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'),
            'has_archive' => 'ac-testimonial'
        );
        register_post_type('ac-testimonial', $args);

//Testimonial Categories
        $labels = array(
            'name'              => _x( 'Testimonial Categories', 'taxonomy general name' ),
            'singular_name'     => _x( 'Testimonial Category', 'taxonomy singular name' ),
            'search_items'      => __( 'Search Testimonial Categories' ),
            'all_items'         => __( 'All Testimonial Categories' ),
            'edit_item'         => __( 'Edit Testimonial Category' ),
            'update_item'       => __( 'Update Testimonial Category' ),
            'add_new_item'      => __( 'Add New Testimonial Category' ),
            'new_item_name'     => __( 'New Tile Testimonial Category' ),
            'menu_name'         => __( 'Testimonial Categories' ),
        );

        $args = array(
            'hierarchical'      => false,
            'labels'            => $labels,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => array( 'slug' => 'ac-testimonial-category' ),
        );

        register_taxonomy( 'ac-testimonial_category', array( 'ac-testimonial' ), $args );

    }

    add_action('init', 'ac_wp_testimonial_posts');


}
