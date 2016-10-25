import React, { Component } from 'react';

class Flyout extends Component {
  render() {
    return (
		<div class="ncss-flyout ncss-brand">
			<div class="ncss-flyout-btn bg-white border-light-grey">Shop Now</div>
			<div class="ncss-flyout-options">
				<a class="ncss-option ncss-brand pt2-sm pr5-sm pb2-sm pl5-sm">Men</a>
				<a class="ncss-option ncss-brand pt2-sm pr5-sm pb2-sm pl5-sm">Women</a>
				<a class="ncss-option ncss-brand pt2-sm pr5-sm pb2-sm pl5-sm">Kids</a>
			</div>
		</div>
    );
  }
}

export default Flyout;
