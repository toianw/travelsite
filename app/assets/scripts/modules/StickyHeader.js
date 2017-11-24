import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.createPageSectionWaypoints();
    this.headerLinks = $('.primary-nav a');
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    const self = this;
    console.log('this', this);
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction === 'down') {
          self.siteHeader.addClass('site-header--dark');
        } else {
          self.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    const self = this;
    this.pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'down') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            self.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "18%"
      });
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'up') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            self.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
