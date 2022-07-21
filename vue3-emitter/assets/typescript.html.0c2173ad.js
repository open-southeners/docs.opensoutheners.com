import{_ as s,o as n,c as a,e}from"./app.10c7f1db.js";const t={},i=e(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><p>This library is fully using TypeScript and it exports types for everything. So your project can take advantage of the library if you&#39;re using TypeScript as well.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>The setup changes a little bit, add this on top of your application (<strong>your main file</strong>):</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">POST_PICTURE_EVENT</span> <span class="token operator">=</span> <span class="token string">&#39;picture.post.event&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">PostPicturePayload</span> <span class="token punctuation">{</span>
  image<span class="token operator">:</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span>
    description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
  user_id<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue3-emitter&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Events</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">POST_PICTURE_EVENT</span><span class="token punctuation">]</span><span class="token operator">:</span> PostPicturePayload
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[i];function c(o,r){return n(),a("div",null,p)}var d=s(t,[["render",c],["__file","typescript.html.vue"]]);export{d as default};
