// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="slide-01-introduction_to_rust.html"><strong aria-hidden="true">1.</strong> Introduction to Rust</a></li><li class="chapter-item expanded "><a href="slide-02-whos_this_guy_.html"><strong aria-hidden="true">2.</strong> Who&#39;s this guy?</a></li><li class="chapter-item expanded "><a href="slide-03-on_the_menu.html"><strong aria-hidden="true">3.</strong> On the menu</a></li><li class="chapter-item expanded "><a href="slide-04-rust.html"><strong aria-hidden="true">4.</strong> Rust</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-05-learning_rust.html"><strong aria-hidden="true">4.1.</strong> Learning Rust</a></li><li class="chapter-item expanded "><a href="slide-06-rust_history.html"><strong aria-hidden="true">4.2.</strong> Rust History</a></li><li class="chapter-item expanded "><a href="slide-07-the_rust_ecosystem.html"><strong aria-hidden="true">4.3.</strong> The Rust ecosystem</a></li></ol></li><li class="chapter-item expanded "><a href="slide-08-getting_started_rustup_cargo.html"><strong aria-hidden="true">5.</strong> Getting started: rustup &amp; cargo</a></li><li class="chapter-item expanded "><a href="slide-09-hello_rust.html"><strong aria-hidden="true">6.</strong> Hello, Rust!</a></li><li class="chapter-item expanded "><a href="slide-10-language_basics.html"><strong aria-hidden="true">7.</strong> Language basics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-11-variables_type_inference.html"><strong aria-hidden="true">7.1.</strong> Variables &amp; type inference</a></li><li class="chapter-item expanded "><a href="slide-12-control_structures.html"><strong aria-hidden="true">7.2.</strong> Control structures</a></li><li class="chapter-item expanded "><a href="slide-13-if_as_an_expression.html"><strong aria-hidden="true">7.3.</strong> If as an expression</a></li><li class="chapter-item expanded "><a href="slide-14-function_declaration.html"><strong aria-hidden="true">7.4.</strong> Function declaration</a></li><li class="chapter-item expanded "><a href="slide-15-immutability_by_default.html"><strong aria-hidden="true">7.5.</strong> Immutability by default</a></li><li class="chapter-item expanded "><a href="slide-16-no_automatic_type_coercion.html"><strong aria-hidden="true">7.6.</strong> No automatic type coercion</a></li><li class="chapter-item expanded "><a href="slide-17-functional_iteration_fluent_apis.html"><strong aria-hidden="true">7.7.</strong> Functional iteration/Fluent APIs</a></li><li class="chapter-item expanded "><a href="slide-18-passing_values_by_reference.html"><strong aria-hidden="true">7.8.</strong> Passing values by reference</a></li><li class="chapter-item expanded "><a href="slide-19-mutable_function_parameters.html"><strong aria-hidden="true">7.9.</strong> Mutable function parameters</a></li></ol></li><li class="chapter-item expanded "><a href="slide-20-container_types.html"><strong aria-hidden="true">8.</strong> Container types</a></li><li class="chapter-item expanded "><a href="slide-21-arrays.html"><strong aria-hidden="true">9.</strong> Arrays</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-22-array_types.html"><strong aria-hidden="true">9.1.</strong> Array types</a></li></ol></li><li class="chapter-item expanded "><a href="slide-23-borrowing.html"><strong aria-hidden="true">10.</strong> Borrowing</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-24-aside_debug_printing_containers.html"><strong aria-hidden="true">10.1.</strong> Aside: Debug Printing Containers</a></li><li class="chapter-item expanded "><a href="slide-25-sub-slices.html"><strong aria-hidden="true">10.2.</strong> Sub-slices</a></li><li class="chapter-item expanded "><a href="slide-26-different_kinds_of_pointers.html"><strong aria-hidden="true">10.3.</strong> Different kinds of pointers</a></li><li class="chapter-item expanded "><a href="slide-27-the_types_of_box.html"><strong aria-hidden="true">10.4.</strong> The types of Box</a></li><li class="chapter-item expanded "><a href="slide-28-ignoring_the_kind_of_pointer_a_value_is_behind.html"><strong aria-hidden="true">10.5.</strong> Ignoring the kind of pointer a value is behind</a></li></ol></li><li class="chapter-item expanded "><a href="slide-29-structs.html"><strong aria-hidden="true">11.</strong> Structs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-30-struct_implementation.html"><strong aria-hidden="true">11.1.</strong> Struct implementation</a></li><li class="chapter-item expanded "><a href="slide-31-struct_methods.html"><strong aria-hidden="true">11.2.</strong> Struct methods</a></li><li class="chapter-item expanded "><a href="slide-32-making_your_structs_debug-printable.html"><strong aria-hidden="true">11.3.</strong> Making your structs debug-printable</a></li><li class="chapter-item expanded "><a href="slide-33-variations_of_self_.html"><strong aria-hidden="true">11.4.</strong> Variations of self</a></li><li class="chapter-item expanded "><a href="slide-34-variations_of_self_summary.html"><strong aria-hidden="true">11.5.</strong> Variations of self summary</a></li></ol></li><li class="chapter-item expanded "><a href="slide-35-enums.html"><strong aria-hidden="true">12.</strong> Enums</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-36-some_none_the_option_enum.html"><strong aria-hidden="true">12.1.</strong> Some, None? The Option enum</a></li><li class="chapter-item expanded "><a href="slide-37-pattern_matching_match.html"><strong aria-hidden="true">12.2.</strong> Pattern matching: match</a></li><li class="chapter-item expanded "><a href="slide-38-pattern_matching_destructuring_assigment.html"><strong aria-hidden="true">12.3.</strong> Pattern matching: destructuring assigment</a></li><li class="chapter-item expanded "><a href="slide-39-more_pattern_matching.html"><strong aria-hidden="true">12.4.</strong> More pattern matching</a></li></ol></li><li class="chapter-item expanded "><a href="slide-40-vectors.html"><strong aria-hidden="true">13.</strong> Vectors</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="slide-41-safe_access.html"><strong aria-hidden="true">13.1.</strong> Safe access</a></li><li class="chapter-item expanded "><a href="slide-42-vector_pseudo_implementation.html"><strong aria-hidden="true">13.2.</strong> Vector pseudo implementation</a></li></ol></li><li class="chapter-item expanded "><a href="slide-43-tuples.html"><strong aria-hidden="true">14.</strong> Tuples</a></li><li class="chapter-item expanded "><a href="slide-44-algebraic_data_types_adts.html"><strong aria-hidden="true">15.</strong> Algebraic Data Types (ADTs)</a></li><li class="chapter-item expanded "><a href="slide-45-ownership_and_borrows.html"><strong aria-hidden="true">16.</strong> Ownership and borrows</a></li><li class="chapter-item expanded "><a href="slide-46-there_can_be_only_one_owner.html"><strong aria-hidden="true">17.</strong> There can be only one owner</a></li><li class="chapter-item expanded "><a href="slide-47-traits.html"><strong aria-hidden="true">18.</strong> Traits</a></li><li class="chapter-item expanded "><a href="slide-48-extending_existing_types.html"><strong aria-hidden="true">19.</strong> Extending existing types</a></li><li class="chapter-item expanded "><a href="slide-49-adding_type_constraints.html"><strong aria-hidden="true">20.</strong> Adding type constraints</a></li><li class="chapter-item expanded "><a href="slide-50-box_dynamic_allocation.html"><strong aria-hidden="true">21.</strong> Box: dynamic allocation</a></li><li class="chapter-item expanded "><a href="slide-51-a_generic_sorted_tree.html"><strong aria-hidden="true">22.</strong> A generic sorted tree</a></li><li class="chapter-item expanded "><a href="slide-52-automatic_memory_reclamation.html"><strong aria-hidden="true">23.</strong> Automatic memory reclamation</a></li><li class="chapter-item expanded "><a href="slide-53-automatic_memory_reclamation.html"><strong aria-hidden="true">24.</strong> Automatic memory reclamation</a></li><li class="chapter-item expanded "><a href="slide-54-automatic_file_closing.html"><strong aria-hidden="true">25.</strong> Automatic file closing</a></li><li class="chapter-item expanded "><a href="slide-55-error_handling.html"><strong aria-hidden="true">26.</strong> Error handling</a></li><li class="chapter-item expanded "><a href="slide-56-the_error_type.html"><strong aria-hidden="true">27.</strong> The Error type</a></li><li class="chapter-item expanded "><a href="slide-57-theres_a_lot_more_to_talk_about.html"><strong aria-hidden="true">28.</strong> There&#39;s a lot more to talk about...</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
