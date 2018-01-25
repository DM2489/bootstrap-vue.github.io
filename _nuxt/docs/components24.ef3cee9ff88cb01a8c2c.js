webpackJsonp([33],{xKVE:function(s,a){s.exports='<h1 id="list-group">List group</h1>\n<blockquote>\n<p>List groups are a flexible and powerful component for displaying a series of content.\nList group items can be modified to support just about any content within.\nThey can also be used as navigation via various props.</p>\n</blockquote>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group.vue --&gt;</span>\n</pre>\n<h2 id="active-items">Active items</h2>\n<p>Set the <code>active</code> prop on a <code>&lt;b-list-group-item&gt;</code> to indicate the current active selection.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">active</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-active.vue --&gt;</span>\n</pre>\n<h2 id="disabled-items">Disabled items</h2>\n<p>Set the <code>disabled</code> prop on a <code>&lt;b-list-group-item&gt;</code> to make it appear disabled (also works\nwith actionalable items. see below).</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-disabled.vue --&gt;</span>\n</pre>\n<h2 id="actionable-list-group-items">Actionable list group items</h2>\n<p>Turn a <code>&lt;b-list-group-item&gt;</code> into an actionable link by specifying either an\n<code>href</code> prop or <a href="/dics/reference/router-links">router-link</a> <code>to</code> prop.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#some-link&quot;</span>&gt;</span>Awesome link<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Link with active state<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Action links are easy<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#foobar&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled link<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-link.vue --&gt;</span>\n</pre>\n<p>Or if you prefer <code>&lt;buttons&gt;</code> over links, set the <code>button</code> prop to <code>true</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>Button item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>I am a button<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled button<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>This is a button too<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-button.vue --&gt;</span>\n</pre>\n<p><strong>Notes:</strong></p>\n<ul>\n<li>When the prop <code>button</code> is <code>true</code>, all <a href="/docs/components/link">link replated props</a>\n(other than <code>active</code>) and the <code>tag</code> prop will have no effect.</li>\n<li>When <code>href</code> or <code>to</code> are set, the <code>tag</code> prop has no effect.</li>\n</ul>\n<h2 id="contextual-variants">Contextual variants</h2>\n<p>Use contextual variants to style list items with a stateful background and color, via\nthe <code>variant</code> prop.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>This is a default list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>This is a primary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>This is a secondary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>This is a success list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>This is a danger list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>This is a warning list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>This is a info list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>This is a light list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>This is a dark list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-variant.vue --&gt;</span>\n</pre>\n<p>Contextual variants also work with action items. Note the addition of the hover styling\nhere not present in the previous example. Also supported is the <code>active</code> state; set it to\nindicate an active selection on a contextual list group item.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>This is a default list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>This is a primary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>This is a secondary list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>This is a success list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>This is a danger list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>This is a warning list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>This is a info list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>This is a light list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>This is a dark list group item<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-variant-action.vue --&gt;</span>\n</pre>\n<h3 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h3>\n<p>Using color to add meaning only provides a visual indication, which will not be conveyed to users\nof assistive technologies &#x2013; such as screen readers. Ensure that information denoted by the color\nis either obvious from the content itself (e.g. the visible text), or is included through alternative\nmeans, such as additional text hidden using the <code>.sr-only</code> class.</p>\n<h2 id="with-badges">With badges</h2>\n<p>Add <a href="/docs/components/badge">badges</a> to any list group item to show unread counts, activity, and\nmore with the help of some <a href="http://getbootstrap.com/docs/4.0/utilities/flex/">utility classes</a>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-between align-items-center&quot;</span>&gt;</span>\n    Cras justo odio\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">pill</span>&gt;</span>14<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-between align-items-center&quot;</span>&gt;</span>\n    Dapibus ac facilisis in\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">pill</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-between align-items-center&quot;</span>&gt;</span>\n    Morbi leo risus\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">pill</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-badges.vue --&gt;</span>\n</pre>\n<h2 id="list-groups-inside-cards">List groups inside cards</h2>\n<p>Incorporate list groups into <a href="/docs/components/cards">cards</a>. Use the <code>&lt;b-list-group&gt;</code>\nprop <code>flush</code> prop when using cards with <code>no-body</code> to make the sides of the list group\nflush with the card.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-card-group</span> <span class="hljs-attr">deck</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">header</span>=<span class="hljs-string">&quot;&lt;b&gt;Card with list group&lt;/b&gt;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text mt-2&quot;</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex\n      nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua\n      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris\n      ad sit ipsum anim Lorem.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">header</span>=<span class="hljs-string">&quot;&lt;b&gt;Card with flush list group&lt;/b&gt;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">flush</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex\n      nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua\n      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris\n      ad sit ipsum anim Lorem.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-group</span>&gt;</span>\n\n\n<span class="hljs-comment">&lt;!-- list-group-card.vue --&gt;</span>\n</pre>\n<h2 id="custom-content">Custom content</h2>\n<p>Add nearly any HTML or component within, even for linked list groups like the one below, with\nthe help of <a href="http://getbootstrap.com/docs/4.0/utilities/flex/">flexbox utility classes</a>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">active</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-column align-items-start&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex w-100 justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>List group item heading<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>3 days ago<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas\n      sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-column align-items-start&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex w-100 justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>List group item heading<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>3 days ago<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas\n      sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-column align-items-start&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex w-100 justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Disabled List group item<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>3 days ago<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas\n      sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- list-group-content.vue --&gt;</span>\n</pre>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components24.ef3cee9ff88cb01a8c2c.js.map