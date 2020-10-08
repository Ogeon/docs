(function() {var implementors = {};
implementors["palette"] = [{"text":"impl&lt;C:&nbsp;Mul, T:&nbsp;Float&gt; Mul&lt;PreAlpha&lt;C, T&gt;&gt; for PreAlpha&lt;C, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float, C:&nbsp;Mul&lt;T&gt;&gt; Mul&lt;T&gt; for PreAlpha&lt;C, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;Mul, T:&nbsp;Float&gt; Mul&lt;Alpha&lt;C, T&gt;&gt; for Alpha&lt;C, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Mul + Clone, C:&nbsp;Mul&lt;T&gt;&gt; Mul&lt;T&gt; for Alpha&lt;C, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; Mul&lt;Lab&lt;Wp, T&gt;&gt; for Lab&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FloatComponent,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: WhitePoint,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; Mul&lt;T&gt; for Lab&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FloatComponent,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: WhitePoint,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; Mul&lt;Luma&lt;S, T&gt;&gt; for Luma&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Component + Mul,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: LumaStandard&lt;TransferFn = LinearFn&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Mul&gt;::Output: Component,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; Mul&lt;T&gt; for Luma&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Component + Mul,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: LumaStandard&lt;TransferFn = LinearFn&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Mul&gt;::Output: Component,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; Mul&lt;Rgb&lt;S, T&gt;&gt; for Rgb&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RgbStandard&lt;TransferFn = LinearFn&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Component + Mul,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Mul&gt;::Output: Component,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; Mul&lt;T&gt; for Rgb&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RgbStandard&lt;TransferFn = LinearFn&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Component + Mul,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Mul&gt;::Output: Component,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; Mul&lt;Xyz&lt;Wp, T&gt;&gt; for Xyz&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FloatComponent,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: WhitePoint,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; Mul&lt;T&gt; for Xyz&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FloatComponent,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: WhitePoint,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; Mul&lt;Yxy&lt;Wp, T&gt;&gt; for Yxy&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FloatComponent,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: WhitePoint,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Wp, T&gt; Mul&lt;T&gt; for Yxy&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FloatComponent,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: WhitePoint,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()