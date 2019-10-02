<?php
/**
 * Created by PhpStorm.
 * User: Richard
 * Date: 07/10/2018
 * Time: 13:46
 */

$handle = 'ac_testimonial_styles';
$handle_js = 'ac_testimonial_script';
$list = 'enqueued';

$the_content = apply_filters('the_content', get_the_content());
$testimonial_title = (get_field('testimonial_title') != '') ? get_field('testimonial_title') : get_the_title() ;
$testimonial_intro = get_field('testimonial_intro');
$testimonial_cite = get_field('testimonial_citation');
$tesimonial_id = get_the_ID();

if (! wp_script_is( $handle_js, $list )) {
    wp_register_script( 'ac_testimonial_script', plugin_dir_url( __FILE__ ) . 'assets/js/ac_testimonial_script.js', array('jquery'), '20181007' );
    wp_enqueue_script( $handle_js );
}

if (! wp_script_is( $handle, $list )) {
    wp_register_style( 'ac_testimonial_styles', plugin_dir_url( __FILE__ ) . 'assets/css/ac_wp_custom_loop_styles.css', array(), '20181007' );
    wp_enqueue_style( 'ac_testimonial_styles' );
}
?>

<li class="l-ac-testimonial-list__item">
<article id="post-<?php the_ID(); ?>" <?php post_class('c-ac-testimonial'); ?>>
  <div class="c-ac-testimonial__thumb">
    <?php if ( '' !== get_the_post_thumbnail() ) : ?>
      <div class="post-thumbnail c-ac-testimonial__feature-image">
            <?php the_post_thumbnail(); ?>
      </div><!-- .post-thumbnail -->
    <?php endif; ?>
         <header  class="entry-header c-ac-testimonial__header">
           <h2 class="entry-title c-ac-testimonial__heading">
             <span class="c-ac-testimonial__title"><?php echo $testimonial_title ?></span>
           </h2>
         </header>

    <?php if ( !empty($the_content) ) : ?>
      <blockquote class="c-ac-testimonial__content">
        <div class="c-ac-testimonial__intro">
          <?php echo $testimonial_intro ?>
          <a class="c-ac-testimonial__link--read-more" href="#"  data-state="off" data-control="testimonial<?php echo $tesimonial_id ?>" > <span class="c-ac-testimonial__read-more-text" >Read More</span></a>
        </div>
        <div class="c-ac-testimonial__body" data-state="off" data-container="testimonial<?php echo $tesimonial_id ?>" >
              <?php the_content() ?>

        </div>
        <cite class="c-testimonial__cite">
            <?php echo $testimonial_cite ?>
        </cite>
        <div class="c-ac-testimonial__footer">
          <a class="c-ac-testimonial__link--read-less" href="#" data-state="off" data-control="testimonial<?php echo $tesimonial_id ?>" > <span class="c-ac-testimonial__read-less-text" >Read Less</span></a>
        </div>
      </blockquote>

    <?php endif; ?>
  </div>
</article>
</li>