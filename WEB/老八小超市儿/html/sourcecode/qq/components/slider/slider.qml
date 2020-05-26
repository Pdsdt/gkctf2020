<swiper
  indicator-dots="{{propData.length > 0}}"
  indicator-color="{{indicator_color}}"
  indicator-active-color="{{indicator_active_color}}"
  autoplay="{{propData.length > 0}}"
  circular="{{circular}}"
  class="banner"
  qq:if="{{propData.length > 0}}">
  <block qq:for="{{propData}}" qq:key="key">
    <swiper-item>
      <image src="{{item.images_url}}" mode="widthFix" data-value="{{item.event_value}}" data-type="{{item.event_type}}" bindtap="banner_event" />
    </swiper-item>
  </block>
</swiper>