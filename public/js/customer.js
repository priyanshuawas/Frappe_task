frappe.listview_settings['Customer'] = {
    onload(listview) {
        listview.page.add_button('Export', () => {
            frappe.call({
                method: "erpapp.customisations.student.export_customers_list",
                callback: result => {
                    if (result.message) {
                        let export_fields = [["Customer ID", "Customer Name", "Customer Type", "Territory", "Customer Group", "Address Line1", "Address Line 2", "City", "Pincode", "State", "Country"]];
                        export_fields.push(...result.message);
                        frappe.tools.downloadify(export_fields, null, 'Customer');
                    }
                }
            });
        });
    }
};