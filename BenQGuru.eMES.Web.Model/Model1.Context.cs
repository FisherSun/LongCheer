﻿//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace BenQGuru.eMES.Web.Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class LongCheerEntities : DbContext
    {
        public LongCheerEntities()
            : base("name=LongCheerEntities")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<DF_CUSTOMERS> DF_CUSTOMERS { get; set; }
        public DbSet<DF_MOVIE_CUSTOMER> DF_MOVIE_CUSTOMER { get; set; }
        public DbSet<DF_MOVIE_DISTRICT> DF_MOVIE_DISTRICT { get; set; }
        public DbSet<DF_MOVIE_EMPLOYEE> DF_MOVIE_EMPLOYEE { get; set; }
        public DbSet<DF_MOVIE_MOVIE> DF_MOVIE_MOVIE { get; set; }
        public DbSet<DF_MOVIE_RENTAL> DF_MOVIE_RENTAL { get; set; }
        public DbSet<DF_MOVIE_STORE> DF_MOVIE_STORE { get; set; }
        public DbSet<DF_MOVIE_TAPE> DF_MOVIE_TAPE { get; set; }
        public DbSet<DF_ORDERDETAILS> DF_ORDERDETAILS { get; set; }
        public DbSet<DF_ORDERS> DF_ORDERS { get; set; }
        public DbSet<DF_PRODUCTS> DF_PRODUCTS { get; set; }
        public DbSet<ORA_ASPNET_APPLICATIONS> ORA_ASPNET_APPLICATIONS { get; set; }
        public DbSet<ORA_ASPNET_USERS> ORA_ASPNET_USERS { get; set; }
        public DbSet<TBL_ASS_MACHINE> TBL_ASS_MACHINE { get; set; }
        public DbSet<TBL_DEFECTIVE> TBL_DEFECTIVE { get; set; }
        public DbSet<TBL_LOT> TBL_LOT { get; set; }
        public DbSet<TBL_MACHINE_SEQUENCE> TBL_MACHINE_SEQUENCE { get; set; }
        public DbSet<TBL_MATERIAL_BARCODE> TBL_MATERIAL_BARCODE { get; set; }
        public DbSet<TBL_PAC_MACHINE> TBL_PAC_MACHINE { get; set; }
        public DbSet<TBL_PACKING_LOT_INFO> TBL_PACKING_LOT_INFO { get; set; }
        public DbSet<TBL_PARTSNO> TBL_PARTSNO { get; set; }
        public DbSet<TBL_REPORTLOG> TBL_REPORTLOG { get; set; }
        public DbSet<TBL_SMT_MACHINE> TBL_SMT_MACHINE { get; set; }
        public DbSet<TBL_TSET_MACHINE> TBL_TSET_MACHINE { get; set; }
        public DbSet<TBL_USER_TEST> TBL_USER_TEST { get; set; }
        public DbSet<TBLALERTDIRECTPASS> TBLALERTDIRECTPASS { get; set; }
        public DbSet<TBLALERTERROR> TBLALERTERROR { get; set; }
        public DbSet<TBLALERTERRORCODE> TBLALERTERRORCODE { get; set; }
        public DbSet<TBLALERTITEM> TBLALERTITEM { get; set; }
        public DbSet<TBLALERTLINEPAUSE> TBLALERTLINEPAUSE { get; set; }
        public DbSet<TBLALERTMAILSETTING> TBLALERTMAILSETTING { get; set; }
        public DbSet<TBLALERTNOTICE> TBLALERTNOTICE { get; set; }
        public DbSet<TBLALERTOQCNG> TBLALERTOQCNG { get; set; }
        public DbSet<TBLAP2ITEM> TBLAP2ITEM { get; set; }
        public DbSet<TBLAPSTATUSLIST> TBLAPSTATUSLIST { get; set; }
        public DbSet<TBLAPTENSTION> TBLAPTENSTION { get; set; }
        public DbSet<TBLAPVCHANGELIST> TBLAPVCHANGELIST { get; set; }
        public DbSet<TBLAQL> TBLAQL { get; set; }
        public DbSet<TBLARMORPLATE> TBLARMORPLATE { get; set; }
        public DbSet<TBLARMORPLATECONTROL> TBLARMORPLATECONTROL { get; set; }
        public DbSet<TBLASN> TBLASN { get; set; }
        public DbSet<TBLASNIQC> TBLASNIQC { get; set; }
        public DbSet<TBLBSHOMESETTING> TBLBSHOMESETTING { get; set; }
        public DbSet<TBLBSHOMESETTINGDETAIL> TBLBSHOMESETTINGDETAIL { get; set; }
        public DbSet<TBLCARTON2LOT> TBLCARTON2LOT { get; set; }
        public DbSet<TBLCARTON2LOTLOG> TBLCARTON2LOTLOG { get; set; }
        public DbSet<TBLCARTON2RCARD> TBLCARTON2RCARD { get; set; }
        public DbSet<TBLCARTON2RCARDLOG> TBLCARTON2RCARDLOG { get; set; }
        public DbSet<TBLCARTONIMEICHECK> TBLCARTONIMEICHECK { get; set; }
        public DbSet<TBLCARTONINFO> TBLCARTONINFO { get; set; }
        public DbSet<TBLCARTONRECHECK> TBLCARTONRECHECK { get; set; }
        public DbSet<TBLCOLORBOXAVGWEIGHT> TBLCOLORBOXAVGWEIGHT { get; set; }
        public DbSet<TBLCOLORBOXRECHECK> TBLCOLORBOXRECHECK { get; set; }
        public DbSet<TBLCREW> TBLCREW { get; set; }
        public DbSet<TBLCUSTOMER> TBLCUSTOMER { get; set; }
        public DbSet<TBLCUSTOMER2OQCCKRATE> TBLCUSTOMER2OQCCKRATE { get; set; }
        public DbSet<TBLDCT> TBLDCT { get; set; }
        public DbSet<TBLDEFAULTITEM2ROUTE> TBLDEFAULTITEM2ROUTE { get; set; }
        public DbSet<TBLDLLTESTDETAIL> TBLDLLTESTDETAIL { get; set; }
        public DbSet<TBLDN> TBLDN { get; set; }
        public DbSet<TBLDNTEMPOUT> TBLDNTEMPOUT { get; set; }
        public DbSet<TBLDOC> TBLDOC { get; set; }
        public DbSet<TBLDOCDIR> TBLDOCDIR { get; set; }
        public DbSet<TBLDOCDIR2USERGROUP> TBLDOCDIR2USERGROUP { get; set; }
        public DbSet<TBLDOWN> TBLDOWN { get; set; }
        public DbSet<TBLDUTY> TBLDUTY { get; set; }
        public DbSet<TBLEC> TBLEC { get; set; }
        public DbSet<TBLEC2MCODE> TBLEC2MCODE { get; set; }
        public DbSet<TBLEC2OPREWORK> TBLEC2OPREWORK { get; set; }
        public DbSet<TBLECG> TBLECG { get; set; }
        public DbSet<TBLECG2EC> TBLECG2EC { get; set; }
        public DbSet<TBLECG2OP> TBLECG2OP { get; set; }
        public DbSet<TBLECS> TBLECS { get; set; }
        public DbSet<TBLECSG> TBLECSG { get; set; }
        public DbSet<TBLECSG2ECS> TBLECSG2ECS { get; set; }
        public DbSet<TBLEQPLOG> TBLEQPLOG { get; set; }
        public DbSet<TBLEQPMAINTAINLOG> TBLEQPMAINTAINLOG { get; set; }
        public DbSet<TBLEQPMAINTENANCE> TBLEQPMAINTENANCE { get; set; }
        public DbSet<TBLEQPOEE> TBLEQPOEE { get; set; }
        public DbSet<TBLEQPTSLOG> TBLEQPTSLOG { get; set; }
        public DbSet<TBLEQPUSEINFO> TBLEQPUSEINFO { get; set; }
        public DbSet<TBLEQUIPMENT> TBLEQUIPMENT { get; set; }
        public DbSet<TBLEQUIPMENTTSTYPE> TBLEQUIPMENTTSTYPE { get; set; }
        public DbSet<TBLEQUIPMENTTYPE> TBLEQUIPMENTTYPE { get; set; }
        public DbSet<TBLERPBOM> TBLERPBOM { get; set; }
        public DbSet<TBLERPINVINTERFACE> TBLERPINVINTERFACE { get; set; }
        public DbSet<TBLESOPPICS> TBLESOPPICS { get; set; }
        public DbSet<TBLESOPPICSNG> TBLESOPPICSNG { get; set; }
        public DbSet<TBLEXCEPTION> TBLEXCEPTION { get; set; }
        public DbSet<TBLEXCEPTIONCODE> TBLEXCEPTIONCODE { get; set; }
        public DbSet<TBLFACER> TBLFACER { get; set; }
        public DbSet<TBLFACER2ITEMVALUE> TBLFACER2ITEMVALUE { get; set; }
        public DbSet<TBLFACER2RCARD> TBLFACER2RCARD { get; set; }
        public DbSet<TBLFACERLOG> TBLFACERLOG { get; set; }
        public DbSet<TBLFACERSTATUSLOG> TBLFACERSTATUSLOG { get; set; }
        public DbSet<TBLFACTORY> TBLFACTORY { get; set; }
        public DbSet<TBLFEEDER> TBLFEEDER { get; set; }
        public DbSet<TBLFEEDER2ITEMVALUE> TBLFEEDER2ITEMVALUE { get; set; }
        public DbSet<TBLFEEDERMAINTAIN> TBLFEEDERMAINTAIN { get; set; }
        public DbSet<TBLFEEDERSPEC> TBLFEEDERSPEC { get; set; }
        public DbSet<TBLFEEDERSTATUSLOG> TBLFEEDERSTATUSLOG { get; set; }
        public DbSet<TBLFIFO> TBLFIFO { get; set; }
        public DbSet<TBLFIFOLOG> TBLFIFOLOG { get; set; }
        public DbSet<TBLFIRSTCHECKBYMO> TBLFIRSTCHECKBYMO { get; set; }
        public DbSet<TBLFROZEN> TBLFROZEN { get; set; }
        public DbSet<TBLFUNCTIONGROUP> TBLFUNCTIONGROUP { get; set; }
        public DbSet<TBLFUNCTIONGROUP2FUNCTION> TBLFUNCTIONGROUP2FUNCTION { get; set; }
        public DbSet<TBLHWOQCSCANTYPE> TBLHWOQCSCANTYPE { get; set; }
        public DbSet<TBLIDINFO> TBLIDINFO { get; set; }
        public DbSet<TBLIMEIPREFIX> TBLIMEIPREFIX { get; set; }
        public DbSet<TBLINDIRECTMANCOUNT> TBLINDIRECTMANCOUNT { get; set; }
        public DbSet<TBLINSTORAGEINFO> TBLINSTORAGEINFO { get; set; }
        public DbSet<TBLINSTORAGEINFOLOG> TBLINSTORAGEINFOLOG { get; set; }
        public DbSet<TBLINVBUSINESS> TBLINVBUSINESS { get; set; }
        public DbSet<TBLINVBUSINESS2FORMULA> TBLINVBUSINESS2FORMULA { get; set; }
        public DbSet<TBLINVFORMULA> TBLINVFORMULA { get; set; }
        public DbSet<TBLINVINTRANSACTION> TBLINVINTRANSACTION { get; set; }
        public DbSet<TBLINVOUTTRANSACTION> TBLINVOUTTRANSACTION { get; set; }
        public DbSet<TBLINVPERIOD> TBLINVPERIOD { get; set; }
        public DbSet<TBLINVPERIODSTD> TBLINVPERIODSTD { get; set; }
        public DbSet<TBLINVRECEIPT> TBLINVRECEIPT { get; set; }
        public DbSet<TBLINVRECEIPTDETAIL> TBLINVRECEIPTDETAIL { get; set; }
        public DbSet<TBLINVTRANSFER> TBLINVTRANSFER { get; set; }
        public DbSet<TBLINVTRANSFERDETAIL> TBLINVTRANSFERDETAIL { get; set; }
        public DbSet<TBLINVTRANSFERMERGE> TBLINVTRANSFERMERGE { get; set; }
        public DbSet<TBLIQCDETAIL> TBLIQCDETAIL { get; set; }
        public DbSet<TBLIQCDETAIL2SN> TBLIQCDETAIL2SN { get; set; }
        public DbSet<TBLIQCDOC> TBLIQCDOC { get; set; }
        public DbSet<TBLIQCTESTDATA> TBLIQCTESTDATA { get; set; }
        public DbSet<TBLITEM> TBLITEM { get; set; }
        public DbSet<TBLITEM2AUTOINSTORAGE> TBLITEM2AUTOINSTORAGE { get; set; }
        public DbSet<TBLITEM2CUSTOMER> TBLITEM2CUSTOMER { get; set; }
        public DbSet<TBLITEM2LOTCHECK> TBLITEM2LOTCHECK { get; set; }
        public DbSet<TBLITEM2MATERIALTYPECLASS> TBLITEM2MATERIALTYPECLASS { get; set; }
        public DbSet<TBLITEM2OQCCKLIST> TBLITEM2OQCCKLIST { get; set; }
        public DbSet<TBLITEM2OTHERRULE> TBLITEM2OTHERRULE { get; set; }
        public DbSet<TBLITEM2ROUTE> TBLITEM2ROUTE { get; set; }
        public DbSet<TBLITEM2SNCHECK> TBLITEM2SNCHECK { get; set; }
        public DbSet<TBLITEM2WEIGH> TBLITEM2WEIGH { get; set; }
        public DbSet<TBLITEMCLASS> TBLITEMCLASS { get; set; }
        public DbSet<TBLITEMLOCATION> TBLITEMLOCATION { get; set; }
        public DbSet<TBLITEMLOT> TBLITEMLOT { get; set; }
        public DbSet<TBLITEMLOTAODLOG> TBLITEMLOTAODLOG { get; set; }
        public DbSet<TBLITEMLOTDETAIL> TBLITEMLOTDETAIL { get; set; }
        public DbSet<TBLITEMMODEL> TBLITEMMODEL { get; set; }
        public DbSet<TBLITEMOPCOUNT> TBLITEMOPCOUNT { get; set; }
        public DbSet<TBLITEMOPTIMECONTROL> TBLITEMOPTIMECONTROL { get; set; }
        public DbSet<TBLITEMOPTIMECONTROL2OUTTIME> TBLITEMOPTIMECONTROL2OUTTIME { get; set; }
        public DbSet<TBLITEMREFLOWROUTE> TBLITEMREFLOWROUTE { get; set; }
        public DbSet<TBLITEMROUTE2OP> TBLITEMROUTE2OP { get; set; }
        public DbSet<TBLITEMTRANS> TBLITEMTRANS { get; set; }
        public DbSet<TBLITEMTRANSLOT> TBLITEMTRANSLOT { get; set; }
        public DbSet<TBLITEMTRANSLOTDETAIL> TBLITEMTRANSLOTDETAIL { get; set; }
        public DbSet<TBLJIG> TBLJIG { get; set; }
        public DbSet<TBLJIGMAINTAIN> TBLJIGMAINTAIN { get; set; }
        public DbSet<TBLJIGSPEC> TBLJIGSPEC { get; set; }
        public DbSet<TBLJOBLOG> TBLJOBLOG { get; set; }
        public DbSet<TBLLABELCHECKDOMAIN> TBLLABELCHECKDOMAIN { get; set; }
        public DbSet<TBLLABELCHECKREGULATION> TBLLABELCHECKREGULATION { get; set; }
        public DbSet<TBLLABELRULE> TBLLABELRULE { get; set; }
        public DbSet<TBLLABELRULE2ITEM> TBLLABELRULE2ITEM { get; set; }
        public DbSet<TBLLCR> TBLLCR { get; set; }
        public DbSet<TBLLCRLOG> TBLLCRLOG { get; set; }
        public DbSet<TBLLINE2CREW> TBLLINE2CREW { get; set; }
        public DbSet<TBLLINE2MANDETAIL> TBLLINE2MANDETAIL { get; set; }
        public DbSet<TBLLINEPAUSE> TBLLINEPAUSE { get; set; }
        public DbSet<TBLLOSTMANHOUR> TBLLOSTMANHOUR { get; set; }
        public DbSet<TBLLOSTMANHOURDETAIL> TBLLOSTMANHOURDETAIL { get; set; }
        public DbSet<TBLLOT> TBLLOT { get; set; }
        public DbSet<TBLLOT2CARD> TBLLOT2CARD { get; set; }
        public DbSet<TBLLOT2CARDCHECK> TBLLOT2CARDCHECK { get; set; }
        public DbSet<TBLLOT2CARTON> TBLLOT2CARTON { get; set; }
        public DbSet<TBLLOT2CARTONLOG> TBLLOT2CARTONLOG { get; set; }
        public DbSet<TBLLOT2CHECKRCARD> TBLLOT2CHECKRCARD { get; set; }
        public DbSet<TBLLOTCHANGELOG> TBLLOTCHANGELOG { get; set; }
        public DbSet<TBLLOTONWIP> TBLLOTONWIP { get; set; }
        public DbSet<TBLLOTONWIPITEM> TBLLOTONWIPITEM { get; set; }
        public DbSet<TBLLOTSIMULATION> TBLLOTSIMULATION { get; set; }
        public DbSet<TBLLOTSIMULATIONREPORT> TBLLOTSIMULATIONREPORT { get; set; }
        public DbSet<TBLMACHINEFEEDER> TBLMACHINEFEEDER { get; set; }
        public DbSet<TBLMACHINEFEEDERLOG> TBLMACHINEFEEDERLOG { get; set; }
        public DbSet<TBLMACPREFIX> TBLMACPREFIX { get; set; }
        public DbSet<TBLMAIL> TBLMAIL { get; set; }
        public DbSet<TBLMATERIAL> TBLMATERIAL { get; set; }
        public DbSet<TBLMATERIAL2OTHER> TBLMATERIAL2OTHER { get; set; }
        public DbSet<TBLMATERIALMSL> TBLMATERIALMSL { get; set; }
        public DbSet<TBLMATERIALRECEIVE> TBLMATERIALRECEIVE { get; set; }
        public DbSet<TBLMDL> TBLMDL { get; set; }
        public DbSet<TBLMENU> TBLMENU { get; set; }
        public DbSet<TBLMESENTITYLIST> TBLMESENTITYLIST { get; set; }
        public DbSet<TBLMFROZEN> TBLMFROZEN { get; set; }
        public DbSet<TBLMINNO> TBLMINNO { get; set; }
        public DbSet<TBLMKEYPART> TBLMKEYPART { get; set; }
        public DbSet<TBLMKEYPARTDETAIL> TBLMKEYPARTDETAIL { get; set; }
        public DbSet<TBLMO> TBLMO { get; set; }
        public DbSet<TBLMO2IMEI> TBLMO2IMEI { get; set; }
        public DbSet<TBLMO2IMEILOG> TBLMO2IMEILOG { get; set; }
        public DbSet<TBLMO2IMEIRANGE> TBLMO2IMEIRANGE { get; set; }
        public DbSet<TBLMO2IMEITEMP> TBLMO2IMEITEMP { get; set; }
        public DbSet<TBLMO2LOTLINK> TBLMO2LOTLINK { get; set; }
        public DbSet<TBLMO2MACBT> TBLMO2MACBT { get; set; }
        public DbSet<TBLMO2MACBTLOG> TBLMO2MACBTLOG { get; set; }
        public DbSet<TBLMO2MACBTTEMP> TBLMO2MACBTTEMP { get; set; }
        public DbSet<TBLMO2PRINTBASE> TBLMO2PRINTBASE { get; set; }
        public DbSet<TBLMO2RCARDLINK> TBLMO2RCARDLINK { get; set; }
        public DbSet<TBLMO2ROUTE> TBLMO2ROUTE { get; set; }
        public DbSet<TBLMO2SN> TBLMO2SN { get; set; }
        public DbSet<TBLMO2WEIGHTRANGE> TBLMO2WEIGHTRANGE { get; set; }
        public DbSet<TBLMOBOM> TBLMOBOM { get; set; }
        public DbSet<TBLMODEL> TBLMODEL { get; set; }
        public DbSet<TBLMODEL2ECG> TBLMODEL2ECG { get; set; }
        public DbSet<TBLMODEL2ECS> TBLMODEL2ECS { get; set; }
        public DbSet<TBLMODEL2ECSG> TBLMODEL2ECSG { get; set; }
        public DbSet<TBLMODEL2ITEM> TBLMODEL2ITEM { get; set; }
        public DbSet<TBLMODEL2SOLUTION> TBLMODEL2SOLUTION { get; set; }
        public DbSet<TBLMOINFO> TBLMOINFO { get; set; }
        public DbSet<TBLMORCARD> TBLMORCARD { get; set; }
        public DbSet<TBLMORCARDRANGE> TBLMORCARDRANGE { get; set; }
        public DbSet<TBLMOREWORKD> TBLMOREWORKD { get; set; }
        public DbSet<TBLMOREWORKDTMP> TBLMOREWORKDTMP { get; set; }
        public DbSet<TBLMOREWORKH> TBLMOREWORKH { get; set; }
        public DbSet<TBLMOSTOCK> TBLMOSTOCK { get; set; }
        public DbSet<TBLMOVIEWFIELD> TBLMOVIEWFIELD { get; set; }
        public DbSet<TBLMSDLEVEL> TBLMSDLEVEL { get; set; }
        public DbSet<TBLMSDLOT> TBLMSDLOT { get; set; }
        public DbSet<TBLMSDWIP> TBLMSDWIP { get; set; }
        public DbSet<TBLMSDWIPNEW> TBLMSDWIPNEW { get; set; }
        public DbSet<TBLNOTICEDIRECTPASS> TBLNOTICEDIRECTPASS { get; set; }
        public DbSet<TBLNOTICEERROR> TBLNOTICEERROR { get; set; }
        public DbSet<TBLNOTICEERRORCODE> TBLNOTICEERRORCODE { get; set; }
        public DbSet<TBLNOTICELINEPAUSE> TBLNOTICELINEPAUSE { get; set; }
        public DbSet<TBLNTFLOG> TBLNTFLOG { get; set; }
        public DbSet<TBLOBA> TBLOBA { get; set; }
        public DbSet<TBLOFFMOCARD> TBLOFFMOCARD { get; set; }
        public DbSet<TBLONWIP> TBLONWIP { get; set; }
        public DbSet<TBLONWIPCARDSPLIT> TBLONWIPCARDSPLIT { get; set; }
        public DbSet<TBLONWIPCARDTRANS> TBLONWIPCARDTRANS { get; set; }
        public DbSet<TBLONWIPECN> TBLONWIPECN { get; set; }
        public DbSet<TBLONWIPITEM> TBLONWIPITEM { get; set; }
        public DbSet<TBLONWIPITEMORT> TBLONWIPITEMORT { get; set; }
        public DbSet<TBLONWIPLOTTRANS> TBLONWIPLOTTRANS { get; set; }
        public DbSet<TBLONWIPSOFTVER> TBLONWIPSOFTVER { get; set; }
        public DbSet<TBLONWIPTRY> TBLONWIPTRY { get; set; }
        public DbSet<TBLOP> TBLOP { get; set; }
        public DbSet<TBLOP2RES> TBLOP2RES { get; set; }
        public DbSet<TBLOP2TEMPLATETYPE> TBLOP2TEMPLATETYPE { get; set; }
        public DbSet<TBLOPBOM> TBLOPBOM { get; set; }
        public DbSet<TBLOPBOMDETAIL> TBLOPBOMDETAIL { get; set; }
        public DbSet<TBLOPITEMCONTROL> TBLOPITEMCONTROL { get; set; }
        public DbSet<TBLOQCCARDLOTCKLIST> TBLOQCCARDLOTCKLIST { get; set; }
        public DbSet<TBLOQCCKGROUP> TBLOQCCKGROUP { get; set; }
        public DbSet<TBLOQCCKGROUP2LIST> TBLOQCCKGROUP2LIST { get; set; }
        public DbSet<TBLOQCCKLIST> TBLOQCCKLIST { get; set; }
        public DbSet<TBLOQCFUNCTEST> TBLOQCFUNCTEST { get; set; }
        public DbSet<TBLOQCFUNCTESTSPEC> TBLOQCFUNCTESTSPEC { get; set; }
        public DbSet<TBLOQCFUNCTESTVALUE> TBLOQCFUNCTESTVALUE { get; set; }
        public DbSet<TBLOQCLOT2CKGROUP> TBLOQCLOT2CKGROUP { get; set; }
        public DbSet<TBLOQCLOT2ERRORCODE> TBLOQCLOT2ERRORCODE { get; set; }
        public DbSet<TBLOQCLOTCARD2ERRORCODE> TBLOQCLOTCARD2ERRORCODE { get; set; }
        public DbSet<TBLOQCLOTCKLIST> TBLOQCLOTCKLIST { get; set; }
        public DbSet<TBLOQCPARA> TBLOQCPARA { get; set; }
        public DbSet<TBLORG> TBLORG { get; set; }
        public DbSet<TBLORTSAMPLINGCONFIG> TBLORTSAMPLINGCONFIG { get; set; }
        public DbSet<TBLORTSAMPLINGLOG> TBLORTSAMPLINGLOG { get; set; }
        public DbSet<TBLOUTLINENGLOG> TBLOUTLINENGLOG { get; set; }
        public DbSet<TBLPACKINGCHK> TBLPACKINGCHK { get; set; }
        public DbSet<TBLPALLET> TBLPALLET { get; set; }
        public DbSet<TBLPALLET2RCARD> TBLPALLET2RCARD { get; set; }
        public DbSet<TBLPALLET2RCARDLOG> TBLPALLET2RCARDLOG { get; set; }
        public DbSet<TBLPANELUSERINFO> TBLPANELUSERINFO { get; set; }
        public DbSet<TBLPAUSE> TBLPAUSE { get; set; }
        public DbSet<TBLPAUSE2RCARD> TBLPAUSE2RCARD { get; set; }
        public DbSet<TBLPLANOPTIME> TBLPLANOPTIME { get; set; }
        public DbSet<TBLPLANWORKTIME> TBLPLANWORKTIME { get; set; }
        public DbSet<TBLPPCODE> TBLPPCODE { get; set; }
        public DbSet<TBLPREFIXIMEIRANGE> TBLPREFIXIMEIRANGE { get; set; }
        public DbSet<TBLPREFIXMACRANGE> TBLPREFIXMACRANGE { get; set; }
        public DbSet<TBLPREFIXNETCODERANGE> TBLPREFIXNETCODERANGE { get; set; }
        public DbSet<TBLPRINTPARAM> TBLPRINTPARAM { get; set; }
        public DbSet<TBLPRINTRECORD> TBLPRINTRECORD { get; set; }
        public DbSet<TBLPRODDETAIL> TBLPRODDETAIL { get; set; }
        public DbSet<TBLPSNRECHECK> TBLPSNRECHECK { get; set; }
        public DbSet<TBLRCARD2ARMORPLATE> TBLRCARD2ARMORPLATE { get; set; }
        public DbSet<TBLRCARD2WEIGHT> TBLRCARD2WEIGHT { get; set; }
        public DbSet<TBLREEL> TBLREEL { get; set; }
        public DbSet<TBLREELCHKLOG> TBLREELCHKLOG { get; set; }
        public DbSet<TBLREELQTY> TBLREELQTY { get; set; }
        public DbSet<TBLREELVALIDITY> TBLREELVALIDITY { get; set; }
        public DbSet<TBLREGULATION2DOMAIN> TBLREGULATION2DOMAIN { get; set; }
        public DbSet<TBLREGULATION2ITEM> TBLREGULATION2ITEM { get; set; }
        public DbSet<TBLREJECT> TBLREJECT { get; set; }
        public DbSet<TBLREJECT2ERRORCODE> TBLREJECT2ERRORCODE { get; set; }
        public DbSet<TBLRES> TBLRES { get; set; }
        public DbSet<TBLRES2MO> TBLRES2MO { get; set; }
        public DbSet<TBLRES2REWORKSHEET> TBLRES2REWORKSHEET { get; set; }
        public DbSet<TBLRESRELEASELOG> TBLRESRELEASELOG { get; set; }
        public DbSet<TBLRESREWRKLOG> TBLRESREWRKLOG { get; set; }
        public DbSet<TBLREWORKDATA> TBLREWORKDATA { get; set; }
        public DbSet<TBLREWORKDATADETAIL> TBLREWORKDATADETAIL { get; set; }
        public DbSet<TBLREWORKPASS> TBLREWORKPASS { get; set; }
        public DbSet<TBLREWORKRANGE> TBLREWORKRANGE { get; set; }
        public DbSet<TBLREWORKRECORD> TBLREWORKRECORD { get; set; }
        public DbSet<TBLREWORKSHEET> TBLREWORKSHEET { get; set; }
        public DbSet<TBLREWORKSHEET2CAUSE> TBLREWORKSHEET2CAUSE { get; set; }
        public DbSet<TBLREWORKSOURCE> TBLREWORKSOURCE { get; set; }
        public DbSet<TBLRMABILL> TBLRMABILL { get; set; }
        public DbSet<TBLRMADETIAL> TBLRMADETIAL { get; set; }
        public DbSet<TBLRMARCARD> TBLRMARCARD { get; set; }
        public DbSet<TBLROUTE> TBLROUTE { get; set; }
        public DbSet<TBLROUTE2OP> TBLROUTE2OP { get; set; }
        public DbSet<TBLRPTHISOPQTY> TBLRPTHISOPQTY { get; set; }
        public DbSet<TBLRPTLINEQTY> TBLRPTLINEQTY { get; set; }
        public DbSet<TBLRPTOPQTY> TBLRPTOPQTY { get; set; }
        public DbSet<TBLRPTREALLINEECQTY> TBLRPTREALLINEECQTY { get; set; }
        public DbSet<TBLRPTREALLINEQTY> TBLRPTREALLINEQTY { get; set; }
        public DbSet<TBLRPTRESECG> TBLRPTRESECG { get; set; }
        public DbSet<TBLRPTSOQTY> TBLRPTSOQTY { get; set; }
        public DbSet<TBLRPTVCHARTCATE> TBLRPTVCHARTCATE { get; set; }
        public DbSet<TBLRPTVCHARTDATA> TBLRPTVCHARTDATA { get; set; }
        public DbSet<TBLRPTVCHARTMAIN> TBLRPTVCHARTMAIN { get; set; }
        public DbSet<TBLRPTVCHARTSER> TBLRPTVCHARTSER { get; set; }
        public DbSet<TBLRPTVCONNECT> TBLRPTVCONNECT { get; set; }
        public DbSet<TBLRPTVDATAFMT> TBLRPTVDATAFMT { get; set; }
        public DbSet<TBLRPTVDATASRC> TBLRPTVDATASRC { get; set; }
        public DbSet<TBLRPTVDATASRCCOLUMN> TBLRPTVDATASRCCOLUMN { get; set; }
        public DbSet<TBLRPTVDATASRCPARAM> TBLRPTVDATASRCPARAM { get; set; }
        public DbSet<TBLRPTVDESIGNMAIN> TBLRPTVDESIGNMAIN { get; set; }
        public DbSet<TBLRPTVENTRY> TBLRPTVENTRY { get; set; }
        public DbSet<TBLRPTVEXTTEXT> TBLRPTVEXTTEXT { get; set; }
        public DbSet<TBLRPTVFILEPARAM> TBLRPTVFILEPARAM { get; set; }
        public DbSet<TBLRPTVFILTERUI> TBLRPTVFILTERUI { get; set; }
        public DbSet<TBLRPTVGRIDCOLUMN> TBLRPTVGRIDCOLUMN { get; set; }
        public DbSet<TBLRPTVGRIDDATAFMT> TBLRPTVGRIDDATAFMT { get; set; }
        public DbSet<TBLRPTVGRIDDATASTYLE> TBLRPTVGRIDDATASTYLE { get; set; }
        public DbSet<TBLRPTVGRIDFLT> TBLRPTVGRIDFLT { get; set; }
        public DbSet<TBLRPTVGRIDGRP> TBLRPTVGRIDGRP { get; set; }
        public DbSet<TBLRPTVGRIDGRPTOTAL> TBLRPTVGRIDGRPTOTAL { get; set; }
        public DbSet<TBLRPTVRPTSECURITY> TBLRPTVRPTSECURITY { get; set; }
        public DbSet<TBLRPTVSTYLE> TBLRPTVSTYLE { get; set; }
        public DbSet<TBLRPTVSTYLEDTL> TBLRPTVSTYLEDTL { get; set; }
        public DbSet<TBLRPTVUSERDFT> TBLRPTVUSERDFT { get; set; }
        public DbSet<TBLRPTVUSERSUBSCR> TBLRPTVUSERSUBSCR { get; set; }
        public DbSet<TBLSAMPLINGPROPORTION> TBLSAMPLINGPROPORTION { get; set; }
        public DbSet<TBLSBOM> TBLSBOM { get; set; }
        public DbSet<TBLSEG> TBLSEG { get; set; }
        public DbSet<TBLSEG2STORAGE> TBLSEG2STORAGE { get; set; }
        public DbSet<TBLSERIALBOOK> TBLSERIALBOOK { get; set; }
        public DbSet<TBLSHIFT> TBLSHIFT { get; set; }
        public DbSet<TBLSHIFTTYPE> TBLSHIFTTYPE { get; set; }
        public DbSet<TBLSIMULATION> TBLSIMULATION { get; set; }
        public DbSet<TBLSIMULATIONREPORT> TBLSIMULATIONREPORT { get; set; }
        public DbSet<TBLSMTALERT> TBLSMTALERT { get; set; }
        public DbSet<TBLSMTCHECKMATERIAL> TBLSMTCHECKMATERIAL { get; set; }
        public DbSet<TBLSMTCHECKMATERIALDTL> TBLSMTCHECKMATERIALDTL { get; set; }
        public DbSet<TBLSMTFEEDERMATERIAL> TBLSMTFEEDERMATERIAL { get; set; }
        public DbSet<TBLSMTFEEDERMATERIALIMPLOG> TBLSMTFEEDERMATERIALIMPLOG { get; set; }
        public DbSet<TBLSMTLINECTLLOG> TBLSMTLINECTLLOG { get; set; }
        public DbSet<TBLSMTLOADCHECKLOG> TBLSMTLOADCHECKLOG { get; set; }
        public DbSet<TBLSMTMACHINEACTIVEINNO> TBLSMTMACHINEACTIVEINNO { get; set; }
        public DbSet<TBLSMTMACHINEDISCARD> TBLSMTMACHINEDISCARD { get; set; }
        public DbSet<TBLSMTMACHINEINNO> TBLSMTMACHINEINNO { get; set; }
        public DbSet<TBLSMTONWIPITEM> TBLSMTONWIPITEM { get; set; }
        public DbSet<TBLSMTRCARDINNO> TBLSMTRCARDINNO { get; set; }
        public DbSet<TBLSMTRCARDMATERIAL> TBLSMTRCARDMATERIAL { get; set; }
        public DbSet<TBLSMTRELATIONQTY> TBLSMTRELATIONQTY { get; set; }
        public DbSet<TBLSMTSENSORQTY> TBLSMTSENSORQTY { get; set; }
        public DbSet<TBLSMTTARGETQTY> TBLSMTTARGETQTY { get; set; }
        public DbSet<TBLSOFTVER> TBLSOFTVER { get; set; }
        public DbSet<TBLSOLDERPASTE> TBLSOLDERPASTE { get; set; }
        public DbSet<TBLSOLDERPASTE2ITEM> TBLSOLDERPASTE2ITEM { get; set; }
        public DbSet<TBLSOLDERPASTECONTROL> TBLSOLDERPASTECONTROL { get; set; }
        public DbSet<TBLSOLDERPASTEPRO> TBLSOLDERPASTEPRO { get; set; }
        public DbSet<TBLSOLDERPASTESEALUP> TBLSOLDERPASTESEALUP { get; set; }
        public DbSet<TBLSOLUTION> TBLSOLUTION { get; set; }
        public DbSet<TBLSPCITEMSPEC> TBLSPCITEMSPEC { get; set; }
        public DbSet<TBLSPCOBJECT> TBLSPCOBJECT { get; set; }
        public DbSet<TBLSPCOBJECTSTORE> TBLSPCOBJECTSTORE { get; set; }
        public DbSet<TBLSPLITBOARD> TBLSPLITBOARD { get; set; }
        public DbSet<TBLSS> TBLSS { get; set; }
        public DbSet<TBLSS2SOUTPUT> TBLSS2SOUTPUT { get; set; }
        public DbSet<TBLSTACK> TBLSTACK { get; set; }
        public DbSet<TBLSTATION> TBLSTATION { get; set; }
        public DbSet<TBLSTDOPTIME> TBLSTDOPTIME { get; set; }
        public DbSet<TBLSTDWORKTIME> TBLSTDWORKTIME { get; set; }
        public DbSet<TBLSTORAGE> TBLSTORAGE { get; set; }
        public DbSet<TBLSTORAGEINFO> TBLSTORAGEINFO { get; set; }
        public DbSet<TBLSTORAGELOTINFO> TBLSTORAGELOTINFO { get; set; }
        public DbSet<TBLSYSERROR> TBLSYSERROR { get; set; }
        public DbSet<TBLSYSPARAM> TBLSYSPARAM { get; set; }
        public DbSet<TBLSYSPARAMGROUP> TBLSYSPARAMGROUP { get; set; }
        public DbSet<TBLTEMPREWORKLOTNO> TBLTEMPREWORKLOTNO { get; set; }
        public DbSet<TBLTEMPREWORKRCARD> TBLTEMPREWORKRCARD { get; set; }
        public DbSet<TBLTESTDATA> TBLTESTDATA { get; set; }
        public DbSet<TBLTIMEDIMENSION> TBLTIMEDIMENSION { get; set; }
        public DbSet<TBLTP> TBLTP { get; set; }
        public DbSet<TBLTRY> TBLTRY { get; set; }
        public DbSet<TBLTRY2LOT> TBLTRY2LOT { get; set; }
        public DbSet<TBLTRY2RCARD> TBLTRY2RCARD { get; set; }
        public DbSet<TBLTS> TBLTS { get; set; }
        public DbSet<TBLTSERRORCAUSE> TBLTSERRORCAUSE { get; set; }
        public DbSet<TBLTSERRORCAUSE2COM> TBLTSERRORCAUSE2COM { get; set; }
        public DbSet<TBLTSERRORCAUSE2EPART> TBLTSERRORCAUSE2EPART { get; set; }
        public DbSet<TBLTSERRORCAUSE2LOC> TBLTSERRORCAUSE2LOC { get; set; }
        public DbSet<TBLTSERRORCAUSE2REPLACEPART> TBLTSERRORCAUSE2REPLACEPART { get; set; }
        public DbSet<TBLTSERRORCODE> TBLTSERRORCODE { get; set; }
        public DbSet<TBLTSERRORCODE2LOC> TBLTSERRORCODE2LOC { get; set; }
        public DbSet<TBLTSITEM> TBLTSITEM { get; set; }
        public DbSet<TBLTSREPLACELOG> TBLTSREPLACELOG { get; set; }
        public DbSet<TBLTSSPLITITEM> TBLTSSPLITITEM { get; set; }
        public DbSet<TBLUPDATELOG> TBLUPDATELOG { get; set; }
        public DbSet<TBLUSER> TBLUSER { get; set; }
        public DbSet<TBLUSER2ORG> TBLUSER2ORG { get; set; }
        public DbSet<TBLUSERGROUP> TBLUSERGROUP { get; set; }
        public DbSet<TBLUSERGROUP2FUNCTIONGROUP> TBLUSERGROUP2FUNCTIONGROUP { get; set; }
        public DbSet<TBLUSERGROUP2RES> TBLUSERGROUP2RES { get; set; }
        public DbSet<TBLUSERGROUP2USER> TBLUSERGROUP2USER { get; set; }
        public DbSet<TBLVENDOR> TBLVENDOR { get; set; }
        public DbSet<TBLWAREHOURSE> TBLWAREHOURSE { get; set; }
        public DbSet<TBLWASHBOARD> TBLWASHBOARD { get; set; }
        public DbSet<TBLWHITEM> TBLWHITEM { get; set; }
        public DbSet<TBLWMSITEMISCOM> TBLWMSITEMISCOM { get; set; }
        public DbSet<ZERPINVRECEIPT> ZERPINVRECEIPT { get; set; }
        public DbSet<ZERPMO> ZERPMO { get; set; }
        public DbSet<ZERPMOBOM> ZERPMOBOM { get; set; }
        public DbSet<ZERPSBOM> ZERPSBOM { get; set; }
        public DbSet<DF_AUTHORS> DF_AUTHORS { get; set; }
        public DbSet<DF_AUTHORS_TITLES> DF_AUTHORS_TITLES { get; set; }
        public DbSet<DF_TITLES> DF_TITLES { get; set; }
        public DbSet<TBL_DOADATA> TBL_DOADATA { get; set; }
        public DbSet<TBLATETOOLS> TBLATETOOLS { get; set; }
        public DbSet<TBLCREW2USER> TBLCREW2USER { get; set; }
        public DbSet<TBLCUSTOMERCODE> TBLCUSTOMERCODE { get; set; }
        public DbSet<TBLCUSTOMERSEGMENT> TBLCUSTOMERSEGMENT { get; set; }
        public DbSet<TBLINVINTRANSSUM> TBLINVINTRANSSUM { get; set; }
        public DbSet<TBLLABELRULEDETAIL> TBLLABELRULEDETAIL { get; set; }
        public DbSet<TBLLINE2MANDETAIL_BAK> TBLLINE2MANDETAIL_BAK { get; set; }
        public DbSet<TBLLOT_ERROR> TBLLOT_ERROR { get; set; }
        public DbSet<TBLONOFFDUTYMID_BAK> TBLONOFFDUTYMID_BAK { get; set; }
        public DbSet<TBLORDERINFORMATION> TBLORDERINFORMATION { get; set; }
        public DbSet<TBLPRINTPARAMLOG> TBLPRINTPARAMLOG { get; set; }
        public DbSet<TBLPRINTTEMPLATE> TBLPRINTTEMPLATE { get; set; }
        public DbSet<TBLPRINTTEMPLATELOG> TBLPRINTTEMPLATELOG { get; set; }
        public DbSet<TBLPRINTTEMPLATEPARAM> TBLPRINTTEMPLATEPARAM { get; set; }
        public DbSet<TBLPRINTTEMPLATEPARAMLOG> TBLPRINTTEMPLATEPARAMLOG { get; set; }
        public DbSet<TBLPRODDETAIL_BAK> TBLPRODDETAIL_BAK { get; set; }
        public DbSet<TBLPRODUCESOFT> TBLPRODUCESOFT { get; set; }
        public DbSet<TBLRCARDCHANGE> TBLRCARDCHANGE { get; set; }
        public DbSet<TBLREWORKONWIP> TBLREWORKONWIP { get; set; }
        public DbSet<TBLSHIPTOSTOCK> TBLSHIPTOSTOCK { get; set; }
        public DbSet<TBLSTACK2RCARD> TBLSTACK2RCARD { get; set; }
        public DbSet<TBLTEMPONWIP> TBLTEMPONWIP { get; set; }
        public DbSet<TBLWORKINGERROR> TBLWORKINGERROR { get; set; }
        public DbSet<TEMP_ONWIPITEM> TEMP_ONWIPITEM { get; set; }
        public DbSet<TMP_TBLONOFFDUTYMID> TMP_TBLONOFFDUTYMID { get; set; }
        public DbSet<ZERPCUSTOMER> ZERPCUSTOMER { get; set; }
        public DbSet<ZERPITEM> ZERPITEM { get; set; }
        public DbSet<ZERPMATERIAL> ZERPMATERIAL { get; set; }
        public DbSet<ZERPMODEL> ZERPMODEL { get; set; }
        public DbSet<ZERPMODEL2ITEM> ZERPMODEL2ITEM { get; set; }
        public DbSet<ZERPVENDOR> ZERPVENDOR { get; set; }
    }
}
