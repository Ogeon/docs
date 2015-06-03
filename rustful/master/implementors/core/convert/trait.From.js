(function() {var implementors = {};
implementors['rustful'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='enum' href='https://hyperium.github.io/hyper/hyper/index.html/hyper/client/pool/enum.Scheme.html' title='hyper::client::pool::Scheme'>Scheme</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a, R&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a mut R&gt; for <a class='enum' href='https://hyperium.github.io/hyper/hyper/index.html/hyper/client/enum.Body.html' title='hyper::client::Body'>Body</a>&lt;'a&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt; for <a class='enum' href='rustful/enum.HttpError.html' title='rustful::HttpError'>Error</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;ParseError&gt; for <a class='enum' href='rustful/enum.HttpError.html' title='rustful::HttpError'>Error</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://sfackler.github.io/rust-openssl/doc/openssl/openssl/ssl/error/enum.SslError.html' title='openssl::ssl::error::SslError'>SslError</a>&gt; for <a class='enum' href='rustful/enum.HttpError.html' title='rustful::HttpError'>Error</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;Error&gt; for <a class='enum' href='rustful/enum.HttpError.html' title='rustful::HttpError'>Error</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='https://hyperium.github.io/hyper/hyper/index.html/hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a> + 'static + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='http://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a T&gt;&gt; for <a class='struct' href='rustful/router/struct.Endpoint.html' title='rustful::router::Endpoint'>Endpoint</a>&lt;'a, T&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt; for <a class='enum' href='rustful/response/enum.Error.html' title='rustful::response::Error'>Error</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='rustful/struct.Host.html' title='rustful::Host'>Host</a>&gt; for <a class='enum' href='http://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html' title='std::net::addr::SocketAddr'>SocketAddr</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt; for <a class='struct' href='rustful/struct.Host.html' title='rustful::Host'>Host</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='http://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html' title='std::net::addr::SocketAddr'>SocketAddr</a>&gt; for <a class='struct' href='rustful/struct.Host.html' title='rustful::Host'>Host</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/net/addr/struct.SocketAddrV4.html' title='std::net::addr::SocketAddrV4'>SocketAddrV4</a>&gt; for <a class='struct' href='rustful/struct.Host.html' title='rustful::Host'>Host</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/net/addr/struct.SocketAddrV6.html' title='std::net::addr::SocketAddrV6'>SocketAddrV6</a>&gt; for <a class='struct' href='rustful/struct.Host.html' title='rustful::Host'>Host</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a class='struct' href='http://doc.rust-lang.org/nightly/std/net/ip/struct.Ipv4Addr.html' title='std::net::ip::Ipv4Addr'>Ipv4Addr</a>, <a href='http://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>)</a>&gt; for <a class='struct' href='rustful/struct.Host.html' title='rustful::Host'>Host</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;&gt; for <a class='enum' href='rustful/enum.Global.html' title='rustful::Global'>Global</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
