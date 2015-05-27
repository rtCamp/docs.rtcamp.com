---
title: Change login form in popup.
---

To change or update login form which is open in popup, you can do this customization in child theme.

Please follow the given steps:

## Remove default Inspirebook form

Add this code in function `rtp_remove_parent_hooks` given in `lib/rtp-custom-hooks-applied.php`.

<pre>remove_action( 'wp_footer', 'rtp_login_popup' );</pre>

## Add custom form

Simply paste following code in 'rtp-custom-hooks-applied.php' and customize it as per you need.

	function rtp_custom_login_popup() {
		if ( class_exists( 'RTP_Login_Widget' ) ) {
			?>

			<div id="rtp-login-popup" class="reveal-modal rtp-login-popup-model tiny" data-reveal>

				<div class="rtp-login-form-container clearfix widget">

					<h2 class="widgettitle">Login</h2>

					<form name="bp-login-form" id="bp-login-widget-form" class="rtp-login-form clearfix" action="<?php echo esc_url( site_url( 'wp-login.php', 'login_post' ) ); ?>" method="post">
						<input type="text" name="log" id="bp-login-widget-user-login" class="input" value="" placeholder="<?php _e( 'Username', 'buddypress' ); ?>" />
						<input type="password" name="pwd" id="bp-login-widget-user-pass" class="input" value="" placeholder="<?php _e( 'Password', 'buddypress' ); ?>" />
						<div class="clearfix rtp-forgetmenot-content">
							<label class="forgetmenot alignleft"><input name="rememberme" type="checkbox" id="bp-login-widget-rememberme" value="forever" /> <?php _e( 'Remember Me', 'buddypress' ); ?></label>
							<a class="rtp-lost-pass" href="<?php echo esc_url( wp_lostpassword_url() ); ?>" title="Lost Password"><?php esc_html_e( 'Lost Password?', 'InspireBook' ); ?></a>
						</div>
						<input type="submit" name="wp-submit" id="bp-login-widget-submit" class="button submit-button rtp-wp-submit full small" value="<?php esc_attr_e( 'Log In', 'buddypress' ); ?>" />
					</form>

					<?php if ( function_exists( 'bp_get_signup_allowed' ) && bp_get_signup_allowed() ) : ?>
						<footer class="rtp-register">
							<?php _e( "Don't have an account?", 'InspireBook' ); ?>
							<span class="bp-login-widget-register-link"><?php printf( __( '<a href="%s" title="Register for a new account">Register</a>', 'buddypress' ), bp_get_signup_page() ); ?></span>
						</footer>
					<?php endif; ?>

				</div>

				<a class="close-reveal-modal rtp-close-reveal">&#215;</a>
			</div><?php
		}
	}

	add_action( 'wp_footer', 'rtp_custom_login_popup' );