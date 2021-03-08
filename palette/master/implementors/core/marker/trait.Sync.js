(function() {var implementors = {};
implementors["approx"] = [{"text":"impl&lt;A:&nbsp;?Sized, B:&nbsp;?Sized&gt; Sync for AbsDiff&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as AbsDiffEq&lt;B&gt;&gt;::Epsilon: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A:&nbsp;?Sized, B:&nbsp;?Sized&gt; Sync for Relative&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as AbsDiffEq&lt;B&gt;&gt;::Epsilon: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A:&nbsp;?Sized, B:&nbsp;?Sized&gt; Sync for Ulps&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as AbsDiffEq&lt;B&gt;&gt;::Epsilon: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["find_crate"] = [{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Dependencies","synthetic":true,"types":[]},{"text":"impl Sync for Package","synthetic":true,"types":[]},{"text":"impl Sync for Manifest","synthetic":true,"types":[]}];
implementors["num_traits"] = [{"text":"impl Sync for FloatErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for ParseFloatError","synthetic":true,"types":[]}];
implementors["palette"] = [{"text":"impl Sync for Equations","synthetic":true,"types":[]},{"text":"impl Sync for Equation","synthetic":true,"types":[]},{"text":"impl Sync for Parameters","synthetic":true,"types":[]},{"text":"impl Sync for Parameter","synthetic":true,"types":[]},{"text":"impl&lt;C, T&gt; Sync for PreAlpha&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Sync for Gradient&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Mix&gt;::Scalar: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Sync for Take&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Mix&gt;::Scalar: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Sync for Slice&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as Mix&gt;::Scalar: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Range&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, T&gt; Sync for Alpha&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; Sync for Hsl&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; Sync for Hsv&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; Sync for Hwb&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Wp, T&gt; Sync for Lab&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Wp, T&gt; Sync for Lch&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; Sync for Luma&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Abgr","synthetic":true,"types":[]},{"text":"impl Sync for Argb","synthetic":true,"types":[]},{"text":"impl Sync for Bgra","synthetic":true,"types":[]},{"text":"impl Sync for Rgba","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Sync for Packed&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; Sync for Rgb&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Wp, T&gt; Sync for Xyz&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Wp, T&gt; Sync for Yxy&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Wp: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for LabHue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for RgbHue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Method","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ConeResponseMatrices&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for OutOfBounds&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, N&gt; Sync for Gamma&lt;S, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Sync for GammaFn&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for F2p2","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Sync for Linear&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for LinearFn","synthetic":true,"types":[]},{"text":"impl Sync for Srgb","synthetic":true,"types":[]},{"text":"impl Sync for A","synthetic":true,"types":[]},{"text":"impl Sync for B","synthetic":true,"types":[]},{"text":"impl Sync for C","synthetic":true,"types":[]},{"text":"impl Sync for D50","synthetic":true,"types":[]},{"text":"impl Sync for D55","synthetic":true,"types":[]},{"text":"impl Sync for D65","synthetic":true,"types":[]},{"text":"impl Sync for D75","synthetic":true,"types":[]},{"text":"impl Sync for E","synthetic":true,"types":[]},{"text":"impl Sync for F2","synthetic":true,"types":[]},{"text":"impl Sync for F7","synthetic":true,"types":[]},{"text":"impl Sync for F11","synthetic":true,"types":[]},{"text":"impl Sync for D50Degree10","synthetic":true,"types":[]},{"text":"impl Sync for D55Degree10","synthetic":true,"types":[]},{"text":"impl Sync for D65Degree10","synthetic":true,"types":[]},{"text":"impl Sync for D75Degree10","synthetic":true,"types":[]}];
implementors["phf"] = [{"text":"impl&lt;K, V&gt; Sync for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Sync for Entries&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Sync for Keys&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Sync for Values&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Set&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["phf_shared"] = [{"text":"impl Sync for Hashes","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl !Sync for IntoIter","synthetic":true,"types":[]},{"text":"impl !Sync for TokenStream","synthetic":true,"types":[]},{"text":"impl !Sync for LexError","synthetic":true,"types":[]},{"text":"impl !Sync for Span","synthetic":true,"types":[]},{"text":"impl !Sync for TokenTree","synthetic":true,"types":[]},{"text":"impl !Sync for Group","synthetic":true,"types":[]},{"text":"impl Sync for Delimiter","synthetic":true,"types":[]},{"text":"impl !Sync for Punct","synthetic":true,"types":[]},{"text":"impl Sync for Spacing","synthetic":true,"types":[]},{"text":"impl !Sync for Ident","synthetic":true,"types":[]},{"text":"impl !Sync for Literal","synthetic":true,"types":[]}];
implementors["serde"] = [{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for UnitDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for BoolDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for I8Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for I16Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for I32Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for I64Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for IsizeDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for U8Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for U16Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for U64Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for UsizeDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for F32Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for F64Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for CharDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for I128Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for U128Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for U32Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Sync for StrDeserializer&lt;'a, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, E&gt; Sync for BorrowedStrDeserializer&lt;'de, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for StringDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Sync for CowStrDeserializer&lt;'a, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Sync for BytesDeserializer&lt;'a, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, E&gt; Sync for BorrowedBytesDeserializer&lt;'de, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I, E&gt; Sync for SeqDeserializer&lt;I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for SeqAccessDeserializer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, I, E&gt; Sync for MapDeserializer&lt;'de, I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;I as Iterator&gt;::Item as Pair&gt;::Second: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for MapAccessDeserializer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for IgnoredAny","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Unexpected&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Ok, Error&gt; Sync for Impossible&lt;Ok, Error&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Error: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ok: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["siphasher"] = [{"text":"impl Sync for SipHasher13","synthetic":true,"types":[]},{"text":"impl Sync for SipHasher24","synthetic":true,"types":[]},{"text":"impl Sync for SipHasher","synthetic":true,"types":[]},{"text":"impl Sync for Hash128","synthetic":true,"types":[]},{"text":"impl Sync for SipHasher13","synthetic":true,"types":[]},{"text":"impl Sync for SipHasher24","synthetic":true,"types":[]},{"text":"impl Sync for SipHasher","synthetic":true,"types":[]}];
implementors["syn"] = [{"text":"impl !Sync for Underscore","synthetic":true,"types":[]},{"text":"impl !Sync for Abstract","synthetic":true,"types":[]},{"text":"impl !Sync for As","synthetic":true,"types":[]},{"text":"impl !Sync for Async","synthetic":true,"types":[]},{"text":"impl !Sync for Auto","synthetic":true,"types":[]},{"text":"impl !Sync for Await","synthetic":true,"types":[]},{"text":"impl !Sync for Become","synthetic":true,"types":[]},{"text":"impl !Sync for Box","synthetic":true,"types":[]},{"text":"impl !Sync for Break","synthetic":true,"types":[]},{"text":"impl !Sync for Const","synthetic":true,"types":[]},{"text":"impl !Sync for Continue","synthetic":true,"types":[]},{"text":"impl !Sync for Crate","synthetic":true,"types":[]},{"text":"impl !Sync for Default","synthetic":true,"types":[]},{"text":"impl !Sync for Do","synthetic":true,"types":[]},{"text":"impl !Sync for Dyn","synthetic":true,"types":[]},{"text":"impl !Sync for Else","synthetic":true,"types":[]},{"text":"impl !Sync for Enum","synthetic":true,"types":[]},{"text":"impl !Sync for Extern","synthetic":true,"types":[]},{"text":"impl !Sync for Final","synthetic":true,"types":[]},{"text":"impl !Sync for Fn","synthetic":true,"types":[]},{"text":"impl !Sync for For","synthetic":true,"types":[]},{"text":"impl !Sync for If","synthetic":true,"types":[]},{"text":"impl !Sync for Impl","synthetic":true,"types":[]},{"text":"impl !Sync for In","synthetic":true,"types":[]},{"text":"impl !Sync for Let","synthetic":true,"types":[]},{"text":"impl !Sync for Loop","synthetic":true,"types":[]},{"text":"impl !Sync for Macro","synthetic":true,"types":[]},{"text":"impl !Sync for Match","synthetic":true,"types":[]},{"text":"impl !Sync for Mod","synthetic":true,"types":[]},{"text":"impl !Sync for Move","synthetic":true,"types":[]},{"text":"impl !Sync for Mut","synthetic":true,"types":[]},{"text":"impl !Sync for Override","synthetic":true,"types":[]},{"text":"impl !Sync for Priv","synthetic":true,"types":[]},{"text":"impl !Sync for Pub","synthetic":true,"types":[]},{"text":"impl !Sync for Ref","synthetic":true,"types":[]},{"text":"impl !Sync for Return","synthetic":true,"types":[]},{"text":"impl !Sync for SelfType","synthetic":true,"types":[]},{"text":"impl !Sync for SelfValue","synthetic":true,"types":[]},{"text":"impl !Sync for Static","synthetic":true,"types":[]},{"text":"impl !Sync for Struct","synthetic":true,"types":[]},{"text":"impl !Sync for Super","synthetic":true,"types":[]},{"text":"impl !Sync for Trait","synthetic":true,"types":[]},{"text":"impl !Sync for Try","synthetic":true,"types":[]},{"text":"impl !Sync for Type","synthetic":true,"types":[]},{"text":"impl !Sync for Typeof","synthetic":true,"types":[]},{"text":"impl !Sync for Union","synthetic":true,"types":[]},{"text":"impl !Sync for Unsafe","synthetic":true,"types":[]},{"text":"impl !Sync for Unsized","synthetic":true,"types":[]},{"text":"impl !Sync for Use","synthetic":true,"types":[]},{"text":"impl !Sync for Virtual","synthetic":true,"types":[]},{"text":"impl !Sync for Where","synthetic":true,"types":[]},{"text":"impl !Sync for While","synthetic":true,"types":[]},{"text":"impl !Sync for Yield","synthetic":true,"types":[]},{"text":"impl !Sync for Add","synthetic":true,"types":[]},{"text":"impl !Sync for AddEq","synthetic":true,"types":[]},{"text":"impl !Sync for And","synthetic":true,"types":[]},{"text":"impl !Sync for AndAnd","synthetic":true,"types":[]},{"text":"impl !Sync for AndEq","synthetic":true,"types":[]},{"text":"impl !Sync for At","synthetic":true,"types":[]},{"text":"impl !Sync for Bang","synthetic":true,"types":[]},{"text":"impl !Sync for Caret","synthetic":true,"types":[]},{"text":"impl !Sync for CaretEq","synthetic":true,"types":[]},{"text":"impl !Sync for Colon","synthetic":true,"types":[]},{"text":"impl !Sync for Colon2","synthetic":true,"types":[]},{"text":"impl !Sync for Comma","synthetic":true,"types":[]},{"text":"impl !Sync for Div","synthetic":true,"types":[]},{"text":"impl !Sync for DivEq","synthetic":true,"types":[]},{"text":"impl !Sync for Dollar","synthetic":true,"types":[]},{"text":"impl !Sync for Dot","synthetic":true,"types":[]},{"text":"impl !Sync for Dot2","synthetic":true,"types":[]},{"text":"impl !Sync for Dot3","synthetic":true,"types":[]},{"text":"impl !Sync for DotDotEq","synthetic":true,"types":[]},{"text":"impl !Sync for Eq","synthetic":true,"types":[]},{"text":"impl !Sync for EqEq","synthetic":true,"types":[]},{"text":"impl !Sync for Ge","synthetic":true,"types":[]},{"text":"impl !Sync for Gt","synthetic":true,"types":[]},{"text":"impl !Sync for Le","synthetic":true,"types":[]},{"text":"impl !Sync for Lt","synthetic":true,"types":[]},{"text":"impl !Sync for MulEq","synthetic":true,"types":[]},{"text":"impl !Sync for Ne","synthetic":true,"types":[]},{"text":"impl !Sync for Or","synthetic":true,"types":[]},{"text":"impl !Sync for OrEq","synthetic":true,"types":[]},{"text":"impl !Sync for OrOr","synthetic":true,"types":[]},{"text":"impl !Sync for Pound","synthetic":true,"types":[]},{"text":"impl !Sync for Question","synthetic":true,"types":[]},{"text":"impl !Sync for RArrow","synthetic":true,"types":[]},{"text":"impl !Sync for LArrow","synthetic":true,"types":[]},{"text":"impl !Sync for Rem","synthetic":true,"types":[]},{"text":"impl !Sync for RemEq","synthetic":true,"types":[]},{"text":"impl !Sync for FatArrow","synthetic":true,"types":[]},{"text":"impl !Sync for Semi","synthetic":true,"types":[]},{"text":"impl !Sync for Shl","synthetic":true,"types":[]},{"text":"impl !Sync for ShlEq","synthetic":true,"types":[]},{"text":"impl !Sync for Shr","synthetic":true,"types":[]},{"text":"impl !Sync for ShrEq","synthetic":true,"types":[]},{"text":"impl !Sync for Star","synthetic":true,"types":[]},{"text":"impl !Sync for Sub","synthetic":true,"types":[]},{"text":"impl !Sync for SubEq","synthetic":true,"types":[]},{"text":"impl !Sync for Tilde","synthetic":true,"types":[]},{"text":"impl !Sync for Brace","synthetic":true,"types":[]},{"text":"impl !Sync for Bracket","synthetic":true,"types":[]},{"text":"impl !Sync for Paren","synthetic":true,"types":[]},{"text":"impl !Sync for Group","synthetic":true,"types":[]},{"text":"impl !Sync for Attribute","synthetic":true,"types":[]},{"text":"impl !Sync for AttrStyle","synthetic":true,"types":[]},{"text":"impl !Sync for Meta","synthetic":true,"types":[]},{"text":"impl !Sync for MetaList","synthetic":true,"types":[]},{"text":"impl !Sync for MetaNameValue","synthetic":true,"types":[]},{"text":"impl !Sync for NestedMeta","synthetic":true,"types":[]},{"text":"impl !Sync for Variant","synthetic":true,"types":[]},{"text":"impl !Sync for Fields","synthetic":true,"types":[]},{"text":"impl !Sync for FieldsNamed","synthetic":true,"types":[]},{"text":"impl !Sync for FieldsUnnamed","synthetic":true,"types":[]},{"text":"impl !Sync for Field","synthetic":true,"types":[]},{"text":"impl !Sync for Visibility","synthetic":true,"types":[]},{"text":"impl !Sync for VisPublic","synthetic":true,"types":[]},{"text":"impl !Sync for VisCrate","synthetic":true,"types":[]},{"text":"impl !Sync for VisRestricted","synthetic":true,"types":[]},{"text":"impl !Sync for Expr","synthetic":true,"types":[]},{"text":"impl !Sync for ExprArray","synthetic":true,"types":[]},{"text":"impl !Sync for ExprAssign","synthetic":true,"types":[]},{"text":"impl !Sync for ExprAssignOp","synthetic":true,"types":[]},{"text":"impl !Sync for ExprAsync","synthetic":true,"types":[]},{"text":"impl !Sync for ExprAwait","synthetic":true,"types":[]},{"text":"impl !Sync for ExprBinary","synthetic":true,"types":[]},{"text":"impl !Sync for ExprBlock","synthetic":true,"types":[]},{"text":"impl !Sync for ExprBox","synthetic":true,"types":[]},{"text":"impl !Sync for ExprBreak","synthetic":true,"types":[]},{"text":"impl !Sync for ExprCall","synthetic":true,"types":[]},{"text":"impl !Sync for ExprCast","synthetic":true,"types":[]},{"text":"impl !Sync for ExprClosure","synthetic":true,"types":[]},{"text":"impl !Sync for ExprContinue","synthetic":true,"types":[]},{"text":"impl !Sync for ExprField","synthetic":true,"types":[]},{"text":"impl !Sync for ExprForLoop","synthetic":true,"types":[]},{"text":"impl !Sync for ExprGroup","synthetic":true,"types":[]},{"text":"impl !Sync for ExprIf","synthetic":true,"types":[]},{"text":"impl !Sync for ExprIndex","synthetic":true,"types":[]},{"text":"impl !Sync for ExprLet","synthetic":true,"types":[]},{"text":"impl !Sync for ExprLit","synthetic":true,"types":[]},{"text":"impl !Sync for ExprLoop","synthetic":true,"types":[]},{"text":"impl !Sync for ExprMacro","synthetic":true,"types":[]},{"text":"impl !Sync for ExprMatch","synthetic":true,"types":[]},{"text":"impl !Sync for ExprMethodCall","synthetic":true,"types":[]},{"text":"impl !Sync for ExprParen","synthetic":true,"types":[]},{"text":"impl !Sync for ExprPath","synthetic":true,"types":[]},{"text":"impl !Sync for ExprRange","synthetic":true,"types":[]},{"text":"impl !Sync for ExprReference","synthetic":true,"types":[]},{"text":"impl !Sync for ExprRepeat","synthetic":true,"types":[]},{"text":"impl !Sync for ExprReturn","synthetic":true,"types":[]},{"text":"impl !Sync for ExprStruct","synthetic":true,"types":[]},{"text":"impl !Sync for ExprTry","synthetic":true,"types":[]},{"text":"impl !Sync for ExprTryBlock","synthetic":true,"types":[]},{"text":"impl !Sync for ExprTuple","synthetic":true,"types":[]},{"text":"impl !Sync for ExprType","synthetic":true,"types":[]},{"text":"impl !Sync for ExprUnary","synthetic":true,"types":[]},{"text":"impl !Sync for ExprUnsafe","synthetic":true,"types":[]},{"text":"impl !Sync for ExprWhile","synthetic":true,"types":[]},{"text":"impl !Sync for ExprYield","synthetic":true,"types":[]},{"text":"impl !Sync for Member","synthetic":true,"types":[]},{"text":"impl !Sync for Index","synthetic":true,"types":[]},{"text":"impl !Sync for MethodTurbofish","synthetic":true,"types":[]},{"text":"impl !Sync for GenericMethodArgument","synthetic":true,"types":[]},{"text":"impl !Sync for FieldValue","synthetic":true,"types":[]},{"text":"impl !Sync for Label","synthetic":true,"types":[]},{"text":"impl !Sync for Arm","synthetic":true,"types":[]},{"text":"impl !Sync for RangeLimits","synthetic":true,"types":[]},{"text":"impl !Sync for Generics","synthetic":true,"types":[]},{"text":"impl !Sync for GenericParam","synthetic":true,"types":[]},{"text":"impl !Sync for TypeParam","synthetic":true,"types":[]},{"text":"impl !Sync for LifetimeDef","synthetic":true,"types":[]},{"text":"impl !Sync for ConstParam","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ImplGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for TypeGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Turbofish&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for BoundLifetimes","synthetic":true,"types":[]},{"text":"impl !Sync for TypeParamBound","synthetic":true,"types":[]},{"text":"impl !Sync for TraitBound","synthetic":true,"types":[]},{"text":"impl !Sync for TraitBoundModifier","synthetic":true,"types":[]},{"text":"impl !Sync for WhereClause","synthetic":true,"types":[]},{"text":"impl !Sync for WherePredicate","synthetic":true,"types":[]},{"text":"impl !Sync for PredicateType","synthetic":true,"types":[]},{"text":"impl !Sync for PredicateLifetime","synthetic":true,"types":[]},{"text":"impl !Sync for PredicateEq","synthetic":true,"types":[]},{"text":"impl !Sync for Item","synthetic":true,"types":[]},{"text":"impl !Sync for ItemConst","synthetic":true,"types":[]},{"text":"impl !Sync for ItemEnum","synthetic":true,"types":[]},{"text":"impl !Sync for ItemExternCrate","synthetic":true,"types":[]},{"text":"impl !Sync for ItemFn","synthetic":true,"types":[]},{"text":"impl !Sync for ItemForeignMod","synthetic":true,"types":[]},{"text":"impl !Sync for ItemImpl","synthetic":true,"types":[]},{"text":"impl !Sync for ItemMacro","synthetic":true,"types":[]},{"text":"impl !Sync for ItemMacro2","synthetic":true,"types":[]},{"text":"impl !Sync for ItemMod","synthetic":true,"types":[]},{"text":"impl !Sync for ItemStatic","synthetic":true,"types":[]},{"text":"impl !Sync for ItemStruct","synthetic":true,"types":[]},{"text":"impl !Sync for ItemTrait","synthetic":true,"types":[]},{"text":"impl !Sync for ItemTraitAlias","synthetic":true,"types":[]},{"text":"impl !Sync for ItemType","synthetic":true,"types":[]},{"text":"impl !Sync for ItemUnion","synthetic":true,"types":[]},{"text":"impl !Sync for ItemUse","synthetic":true,"types":[]},{"text":"impl !Sync for UseTree","synthetic":true,"types":[]},{"text":"impl !Sync for UsePath","synthetic":true,"types":[]},{"text":"impl !Sync for UseName","synthetic":true,"types":[]},{"text":"impl !Sync for UseRename","synthetic":true,"types":[]},{"text":"impl !Sync for UseGlob","synthetic":true,"types":[]},{"text":"impl !Sync for UseGroup","synthetic":true,"types":[]},{"text":"impl !Sync for ForeignItem","synthetic":true,"types":[]},{"text":"impl !Sync for ForeignItemFn","synthetic":true,"types":[]},{"text":"impl !Sync for ForeignItemStatic","synthetic":true,"types":[]},{"text":"impl !Sync for ForeignItemType","synthetic":true,"types":[]},{"text":"impl !Sync for ForeignItemMacro","synthetic":true,"types":[]},{"text":"impl !Sync for TraitItem","synthetic":true,"types":[]},{"text":"impl !Sync for TraitItemConst","synthetic":true,"types":[]},{"text":"impl !Sync for TraitItemMethod","synthetic":true,"types":[]},{"text":"impl !Sync for TraitItemType","synthetic":true,"types":[]},{"text":"impl !Sync for TraitItemMacro","synthetic":true,"types":[]},{"text":"impl !Sync for ImplItem","synthetic":true,"types":[]},{"text":"impl !Sync for ImplItemConst","synthetic":true,"types":[]},{"text":"impl !Sync for ImplItemMethod","synthetic":true,"types":[]},{"text":"impl !Sync for ImplItemType","synthetic":true,"types":[]},{"text":"impl !Sync for ImplItemMacro","synthetic":true,"types":[]},{"text":"impl !Sync for Signature","synthetic":true,"types":[]},{"text":"impl !Sync for FnArg","synthetic":true,"types":[]},{"text":"impl !Sync for Receiver","synthetic":true,"types":[]},{"text":"impl !Sync for File","synthetic":true,"types":[]},{"text":"impl !Sync for Lifetime","synthetic":true,"types":[]},{"text":"impl !Sync for Lit","synthetic":true,"types":[]},{"text":"impl !Sync for LitStr","synthetic":true,"types":[]},{"text":"impl !Sync for LitByteStr","synthetic":true,"types":[]},{"text":"impl !Sync for LitByte","synthetic":true,"types":[]},{"text":"impl !Sync for LitChar","synthetic":true,"types":[]},{"text":"impl !Sync for LitInt","synthetic":true,"types":[]},{"text":"impl !Sync for LitFloat","synthetic":true,"types":[]},{"text":"impl !Sync for LitBool","synthetic":true,"types":[]},{"text":"impl Sync for StrStyle","synthetic":true,"types":[]},{"text":"impl !Sync for Macro","synthetic":true,"types":[]},{"text":"impl !Sync for MacroDelimiter","synthetic":true,"types":[]},{"text":"impl !Sync for DeriveInput","synthetic":true,"types":[]},{"text":"impl !Sync for Data","synthetic":true,"types":[]},{"text":"impl !Sync for DataStruct","synthetic":true,"types":[]},{"text":"impl !Sync for DataEnum","synthetic":true,"types":[]},{"text":"impl !Sync for DataUnion","synthetic":true,"types":[]},{"text":"impl !Sync for BinOp","synthetic":true,"types":[]},{"text":"impl !Sync for UnOp","synthetic":true,"types":[]},{"text":"impl !Sync for Block","synthetic":true,"types":[]},{"text":"impl !Sync for Stmt","synthetic":true,"types":[]},{"text":"impl !Sync for Local","synthetic":true,"types":[]},{"text":"impl !Sync for Type","synthetic":true,"types":[]},{"text":"impl !Sync for TypeArray","synthetic":true,"types":[]},{"text":"impl !Sync for TypeBareFn","synthetic":true,"types":[]},{"text":"impl !Sync for TypeGroup","synthetic":true,"types":[]},{"text":"impl !Sync for TypeImplTrait","synthetic":true,"types":[]},{"text":"impl !Sync for TypeInfer","synthetic":true,"types":[]},{"text":"impl !Sync for TypeMacro","synthetic":true,"types":[]},{"text":"impl !Sync for TypeNever","synthetic":true,"types":[]},{"text":"impl !Sync for TypeParen","synthetic":true,"types":[]},{"text":"impl !Sync for TypePath","synthetic":true,"types":[]},{"text":"impl !Sync for TypePtr","synthetic":true,"types":[]},{"text":"impl !Sync for TypeReference","synthetic":true,"types":[]},{"text":"impl !Sync for TypeSlice","synthetic":true,"types":[]},{"text":"impl !Sync for TypeTraitObject","synthetic":true,"types":[]},{"text":"impl !Sync for TypeTuple","synthetic":true,"types":[]},{"text":"impl !Sync for Abi","synthetic":true,"types":[]},{"text":"impl !Sync for BareFnArg","synthetic":true,"types":[]},{"text":"impl !Sync for Variadic","synthetic":true,"types":[]},{"text":"impl !Sync for ReturnType","synthetic":true,"types":[]},{"text":"impl !Sync for Pat","synthetic":true,"types":[]},{"text":"impl !Sync for PatBox","synthetic":true,"types":[]},{"text":"impl !Sync for PatIdent","synthetic":true,"types":[]},{"text":"impl !Sync for PatLit","synthetic":true,"types":[]},{"text":"impl !Sync for PatMacro","synthetic":true,"types":[]},{"text":"impl !Sync for PatOr","synthetic":true,"types":[]},{"text":"impl !Sync for PatPath","synthetic":true,"types":[]},{"text":"impl !Sync for PatRange","synthetic":true,"types":[]},{"text":"impl !Sync for PatReference","synthetic":true,"types":[]},{"text":"impl !Sync for PatRest","synthetic":true,"types":[]},{"text":"impl !Sync for PatSlice","synthetic":true,"types":[]},{"text":"impl !Sync for PatStruct","synthetic":true,"types":[]},{"text":"impl !Sync for PatTuple","synthetic":true,"types":[]},{"text":"impl !Sync for PatTupleStruct","synthetic":true,"types":[]},{"text":"impl !Sync for PatType","synthetic":true,"types":[]},{"text":"impl !Sync for PatWild","synthetic":true,"types":[]},{"text":"impl !Sync for FieldPat","synthetic":true,"types":[]},{"text":"impl !Sync for Path","synthetic":true,"types":[]},{"text":"impl !Sync for PathSegment","synthetic":true,"types":[]},{"text":"impl !Sync for PathArguments","synthetic":true,"types":[]},{"text":"impl !Sync for GenericArgument","synthetic":true,"types":[]},{"text":"impl !Sync for AngleBracketedGenericArguments","synthetic":true,"types":[]},{"text":"impl !Sync for Binding","synthetic":true,"types":[]},{"text":"impl !Sync for Constraint","synthetic":true,"types":[]},{"text":"impl !Sync for ParenthesizedGenericArguments","synthetic":true,"types":[]},{"text":"impl !Sync for QSelf","synthetic":true,"types":[]},{"text":"impl !Sync for TokenBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Cursor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Sync for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Sync for Pairs&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Sync for PairsMut&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Sync for IntoPairs&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for IntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Sync for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Sync for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Sync for Pair&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Lookahead1&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ParseBuffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'a&gt; !Sync for StepCursor&lt;'c, 'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Nothing","synthetic":true,"types":[]}];
implementors["toml"] = [{"text":"impl&lt;K, V&gt; Sync for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Entry&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for VacantEntry&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for OccupiedEntry&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Iter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for IterMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for IntoIter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Keys&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Values&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Datetime","synthetic":true,"types":[]},{"text":"impl Sync for DatetimeParseError","synthetic":true,"types":[]},{"text":"impl Sync for Value","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Serializer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Deserializer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Spanned&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()