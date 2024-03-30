
// frappe.pages['custom-dashboard'].on_page_load = function(wrapper) {
//     var page = frappe.ui.make_app_page({
//         parent: wrapper,
//         title: 'Custom Dashboard',
//         single_column: true
//     });
//     frappe.call({
//         method: 'customapp.custom_dashboard.get_sales_data',
//         callback: function(r) {
//             var data = r.message;
            
//             var totalSalesCard = page.add_card({
//                 title: 'Total Sales',
//                 value: data,
//                 indicator: 'Blue'
//             });
//         }
//     });
// }
