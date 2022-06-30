import { ref } from "vue";

export default class UserMasterDesignClass{
    public UserID     ='UserID';
    public FirstName  = 'FirstName';
    public FamilyName = 'FamilyName';
    public MiddleName = 'MiddleName';
    public Year       = 'Year';
    public MaxYear    = 9999;
    public MinYear    = 1990;
    public Month      = 'Month';
    public MaxMonth   = 12;
    public MinMonth   = 1;
    public Day        = 'Day';
    public MaxDay     = ref(31);
    public MinDay     = ref(1);
    public Grouping   = false;
    public YeraEvent  = 'InputYearMonth'
    public ButtonLabel_Save = "Save";
    public icon_Save = "pi pi-pencil";
    public ButtonLabel_Update = "Update";
    public icon_Update = "pi pi-refresh";

}