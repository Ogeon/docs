(function() {var implementors = {};
implementors["palette"] = [{text:"impl&lt;C, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"palette/encoding/pixel/trait.Pixel.html\" title=\"trait palette::encoding::pixel::Pixel\">Pixel</a>&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::blend::pre_alpha::PreAlpha"]},{text:"impl&lt;C, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"palette/encoding/pixel/trait.Pixel.html\" title=\"trait palette::encoding::pixel::Pixel\">Pixel</a>&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::alpha::Alpha"]},{text:"impl&lt;S, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/rgb/trait.RgbSpace.html\" title=\"trait palette::rgb::RgbSpace\">RgbSpace</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::hsl::Hsl"]},{text:"impl&lt;S, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/rgb/trait.RgbSpace.html\" title=\"trait palette::rgb::RgbSpace\">RgbSpace</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::hsv::Hsv"]},{text:"impl&lt;S, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/rgb/trait.RgbSpace.html\" title=\"trait palette::rgb::RgbSpace\">RgbSpace</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::hwb::Hwb"]},{text:"impl&lt;Wp, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: <a class=\"trait\" href=\"palette/white_point/trait.WhitePoint.html\" title=\"trait palette::white_point::WhitePoint\">WhitePoint</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::lab::Lab"]},{text:"impl&lt;Wp, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: <a class=\"trait\" href=\"palette/white_point/trait.WhitePoint.html\" title=\"trait palette::white_point::WhitePoint\">WhitePoint</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::lch::Lch"]},{text:"impl&lt;S, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/luma/trait.LumaStandard.html\" title=\"trait palette::luma::LumaStandard\">LumaStandard</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::luma::luma::Luma"]},{text:"impl&lt;S, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"palette/rgb/trait.RgbStandard.html\" title=\"trait palette::rgb::RgbStandard\">RgbStandard</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::rgb::rgb::Rgb"]},{text:"impl&lt;Wp, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: <a class=\"trait\" href=\"palette/white_point/trait.WhitePoint.html\" title=\"trait palette::white_point::WhitePoint\">WhitePoint</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::xyz::Xyz"]},{text:"impl&lt;Wp, T, P:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;P&gt; for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: <a class=\"trait\" href=\"palette/white_point/trait.WhitePoint.html\" title=\"trait palette::white_point::WhitePoint\">WhitePoint</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"palette/encoding/pixel/trait.RawPixel.html\" title=\"trait palette::encoding::pixel::RawPixel\">RawPixel</a>&lt;T&gt;,&nbsp;</span>",synthetic:false,types:["palette::yxy::Yxy"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()