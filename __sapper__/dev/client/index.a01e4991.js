import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.5926675a.js';

/* src/routes/index.svelte generated by Svelte v3.38.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let li;
	let a;
	let t2;
	let a_aria_current_value;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("El Oyente");
			t1 = space();
			li = element("li");
			a = element("a");
			t2 = text("about");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "El Oyente");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { "aria-current": true, href: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, "about");
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 3, 0, 40);
			attr_dev(a, "aria-current", a_aria_current_value = /*segment*/ ctx[0] === "about" ? "page" : undefined);
			attr_dev(a, "href", "noticias/cancilleria-de-peru-envia-nota-de-protesta-a-bolivia");
			add_location(a, file, 4, 4, 63);
			add_location(li, file, 4, 0, 59);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*segment*/ 1 && a_aria_current_value !== (a_aria_current_value = /*segment*/ ctx[0] === "about" ? "page" : undefined)) {
				attr_dev(a, "aria-current", a_aria_current_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { segment } = $$props;
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$capture_state = () => ({ segment });

	$$self.$inject_state = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [segment];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console.warn("<Routes> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTAxZTQ5OTEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgc2VnbWVudDtcbjwvc2NyaXB0PlxuPGgxPkVsIE95ZW50ZTwvaDE+XG48bGk+PGEgYXJpYS1jdXJyZW50PVwie3NlZ21lbnQgPT09ICdhYm91dCcgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cIm5vdGljaWFzL2NhbmNpbGxlcmlhLWRlLXBlcnUtZW52aWEtbm90YS1kZS1wcm90ZXN0YS1hLWJvbGl2aWFcIj5hYm91dDwvYT48L2xpPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBSXNCLEdBQU8sUUFBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7OzZGQUF4QyxHQUFPLFFBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FIbEQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
