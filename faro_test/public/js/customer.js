frappe.ui.form.on('Customer', {
    refresh: function(frm) {
        recalcLayby(frm);
        frm.set_df_property("allowed_for_layby", "read_only", 1);
    },
    identification_type: function(frm) {
        recalcLayby(frm);
    },
    id_number: function(frm) {
        recalcLayby(frm);
    },
    mobile_no: function(frm) {
        recalcLayby(frm);
    }
});

function recalcLayby(frm) {
    let allowed = (frm.doc.identification_type !== "None" && frm.doc.id_number && frm.doc.mobile_no);
    frm.set_value("allowed_for_layby", allowed);
    frm.refresh_field("allowed_for_layby");
}
