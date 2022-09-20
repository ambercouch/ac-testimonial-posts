<?php
/*
  Plugin Name: AC Testimonial Posts
  Plugin URI: https://github.com/ambercouch/ac-wp-custom-loop-shortcode
  Description: Shortcode  ( [ac_custom_loop] ) that allows you to easily list post, pages or custom posts with the WordPress content editor or in any widget that supports short code. A typical use would be to show your latest post on your homepage.
  Version: 1.3.0
  Author: AmberCouch
  Author URI: http://ambercouch.co.uk
  Author Email: richard@ambercouch.co.uk
  Text Domain: ac-wp-custom-loop-shortcode
  Domain Path: /lang/
  License:
  Copyright 2018 AmberCouch
  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

defined('ABSPATH') or die('You do not have the required permissions');

// Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', 'inc/acf/' );
define( 'MY_ACF_URL', plugin_dir_url( __FILE__ ) . 'inc/acf/' );

// Include the testimonial custom post type.
require_once(  'lib/cpt.php' );

// Include the ACF plugin.
//require_once( MY_ACF_PATH . 'acf.php' );

// Include the testimonial custom fields.
require_once(  'lib/acf.php' );

// Customize the url setting to fix incorrect asset URLs.
add_filter('acf/settings/url', 'my_acf_settings_url');
function my_acf_settings_url( $url ) {
   // return MY_ACF_URL;
}

// (Optional) Hide the ACF admin menu item.
//add_filter('acf/settings/show_admin', 'my_acf_settings_show_admin');
function my_acf_settings_show_admin( $show_admin ) {
    //return false;
}

// Include the testimonial custom fields.
require_once(  'inc/cls/ac-wp-custom-loop-sc.php' );


function ac_testimonail($atts){



    extract(shortcode_atts(array(
        'type' => 'ac-testimonial',
        'show' => -1,
        'template_path' => get_stylesheet_directory() . '/',
        'template' => plugin_dir_path( __file__ ),
        'css' => 'true',
        'wrapper' => 'false',
        'ignore_sticky_posts' => 1,
        'orderby' => '',
        'order' => 'DESC',
        'class' => 'c-accl-post-list',
        'tax' => '',
        'term' => '',
        'ids' => ''

    ), $atts));

    $plugin_path = plugin_dir_path( __file__ );

    $wrapper = 'false';

    $output = '';
    $output .= '<div class="l-ac-testimonials">';
    $output .= '<div class="l-ac-testimonials__testimonial-list">';
    $output .= '<ul class="l-ac-testimonial-list__list">';
    $output .= do_shortcode('[ac_custom_loop show="'.$show.'" type="'.$type.'" template_path="'.$template.'" wrapper="'.$wrapper.' ids="'.$ids.'" ]');
    $output .= '</ul>';
    $output .= '</div>';
    $output .= '</div>';
    return $output;
}

add_shortcode('ac_testimonials', 'ac_testimonail');





