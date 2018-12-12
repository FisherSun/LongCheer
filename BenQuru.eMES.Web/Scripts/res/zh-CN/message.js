﻿define([],
    function () {
        return {

            PleaseFillActualQuantity: '请填写实际数量',

            Confirm: '确认',
            AbnormalDebit: '异常扣款',
            ConfirmDelete: '确认删除',
            ConfirmDone: '确认完成',
            ConfirmStart: "确认开始",
            ConfirmEnd: "确认结束",
            ConfirmSave: "确认保存",
            ConfirmSubmit: "确认提交",
            ConfirmCancelProject: "确认要取消该订单整个项目行吗？",
            ConfirmCloseProject: "确认要关闭该订单尾数吗？",
            ConfirmTransferOrder: "确认转订单",
            ConfirmAudit: '确认审核',
            ConfirmReject: '确认驳回',
            ConfirmSubmitSap: '确认上报Sap',
            This: '这',
            For: '为',
            DeMa: '的记录吗？',
            BarDeMa: '条信息吗？',
            NotInput: '未填写',
            NotFound: '未找到',
            WrongFormat: '格式错误',
            PleaseCheck: '请检查',
            WrongNum: '数值错误',
            NotFoundInWeek: '在供货周期中未找到对应的上午或下午项',
            quitDialogMessage: "你确定要关闭当前对话框吗?",
            confirmationTitle: "请确认",
            agreementLoadFail: "协议加载失败...",
            alertTitle: "提示",
            waiteMessage: "数据处理中，请稍等... ...",
            Saved: "保存成功",
            ResetDone: '已重置',
            AlreadyOamPrinter: '打印信息已维护',

            PleaseSelect: "请选择",
            PSelectCompany: '请选择公司',
            PSelectDloc: '请选择翻包台',
            PSelectWm: '请选择仓库',
            PSelectZone: '请选择存储区',
            PSelectDlocs: '请选择库位',
            PSelectSupplier: '请选择供应商',
            PSelectTime: '请选择日期',
            PSelectDepartment: '请录入部门',
            PSelectCostCenter: '请录入成本中心',
            MaterialToBorrowArea: '物料将进入借料区',
            FutureCFrozen: '将产生冻结库存',
            FutureCAllocateNum: '将产生占用库存',
            FCloseSheetARAllocateNum: '关闭单据,释放占用',
            FShelveCAllocateNum:'上架,消耗占用,组装完成',
            PInputCorrectBorrowNo: '请录入正确有效的借料单号',
            PSelectPublishKeeper: '请录入申请人',
            ManySeparatedWithComma: "多个请用英文逗号分隔",
            TransferErr: '单据中的部分零件已经进行了上下架操作',
            LossDone: '单据已经盘亏完成,请勿重复操作',
            RefundTosrmErra: '单据上传到SRM失败',
            LabelTypeErr: '请维护好零件的标签属性',
            DoneErrm: '单据已经完成',
            DelErrd: '单据已经上传SRM不能删除',
            DelErre: '单据已经上传SRM',
            DoUSrm: '请先上报SRM',
            PartDown: '零件已经完成下架',
            PartShelved: '零件已经完成上架',
            PartShelveLoc:'请检查单据零件上架位置:',

            from: "从",
            to: "到",
            down: '下',
            TransferSucceeded: '移库成功',
            OperationSucceeded: '操作成功',
            Completed: '操作完成',
            CreateNotificationDone: '盘点单创建成功',
            ImportErrMeun: '不能导入空文件',
            MaterialCodeBelongPartOnly: '料架编码已经在其他料架号下维护',
            ImportErrMissColumn: '上传的Excel表格中缺少列名',
            ImportErrIndex: '第',
            ImportErrField: '行',
            ImportErrFieldMsg: '字段信息有误',
            ImportNullFieldMsg: '字段信息不能为空',
            ImportNullOrErrorFieldMsg: '字段信息不能为空,或者不是指定格式',
            MaterialCodeOnly: '料架编码重复,请确认唯一',
            ImportfieldErrA: '在系统中已存在,请确认',
            ImportfieldErrB: '在系统中不存在,请确认',
            ImportfieldErrD: '输入的格式错误,请确认',
            ImportErrFile: '请选择Excel文件进行导入',
            OverLength: '长度过长(限制为20位)',
            OverLengthB: '长度过长(限制为30位)',
            PChoosePartForNotification: '请选择要盘点的零件加入盘点,在发布',
            ImportErrNum: '只能输入非0的正整数',
            ExportNoData: '请查询到至少一条数据进行导出',
            PrintNoData: '请查询到至少一条数据进行打印',
            DeliveryOrderData: '请选择至少一条的数据进行生成交货单',
            TransferOrderData: '请选择至少一条的数据进行生成转储订单',
            OperateDataFail: '操作失败，请重试',
            PCheckMainData: '请核查主数据',
            POamPackage: '请维护包材主数据',
            PartBelongTo: '零件属于',
            PartConfirmTagPaper: ';请确认是否需要更换标签纸',
            HoldDloca: '下架的库位被冻结',
            HoldDlocb: '上架的库位被冻结',
            SaveErra: '盘点已结束,不能保存更改',
            SaveErrb: '盘点已结束',
            SaveErrc: '分析结果中盘盈盘亏数量未全部录入完毕',
            TransferPlace: '请在系统中创建中转区,库位进行移库',
            RLossPlace: '请在系统中创建退换货区,库位进行报损操作',
            BorrowPlace: '请在系统中创建借料区,库位进行操作',
            InternalPlace: '请在系统中创建领料区,库位进行操作',
            ClaimPlace: '请在系统中创建索赔区,库位进行操作',
            AssemblePlace: '请在系统中创建组装区,库位进行操作',
            ScrapPlace: '请在系统中创建报废区,库位进行操作',
            PictureType: '只能上传.jpg，.png，.gif格式的图片',
            //wxm
            PartGroupProfitErr: '未添加采购协议不能定价',
            HasOnProgressPart: '已存在正在处理中的信息，在财务审核通过之前不能添加新的版本',
            PartGroupProfitExit: '该客户组已采用利润率管理',
            PartGroupModulusExit: '该客户组已采用折扣系数管理',
            PartGroupRateErr: '未获取到加价率不能定价',
            PartErr: '在系统中不存在该零件，请确认',
            PartGroupErr: '未获取到价格组不能定价',

            MdmPartGroupErr: '主数据中未找到价格组不能定价',

            ComplaintsReason: '投诉原因',

            lineNum: '行',

            Invalid: '无效',
            Middle: '中',
            HasInputInventoryDetail: '已经录入的盘点明细',
            HasNoWarehouseCanRead: '您未有访问任何仓库的权限，如有需要，请向管理员索取。',
            InputInteger: '只能输入正整数',
            AddDetailErr: '明细已经存在,不能重复添加',
            SubmitDetailErr: '请创建单据明细提交进行库存调整',
            SubmitDetailSN: '请创建单据明细提交',
            NotificationDetailErra: '请创建盘点单据明细保存后再开始盘点',
            ActFinished: '已确认',
            ActDone: '已完成',
            LowRequireNum: '不能大于需求数量',
            PackageNeedOamWm: '请维护好包材区，库位，再进行收货入库',
            PackageNeedOamWmB: '请维护好委外区，库位，再进行收货入库',
            PackageNeedOamWmC: '请维护好包材区，库位',
            PackageNeedOamWmD: '请维护好定制件区，库位',
            PackageNeedOamWmE: '请维护好绿色通道上架区，库位',
            PackageNeedOamWmF: '请维护好盘亏区，库位',
            AssembleSheetErrA: '组装单一单只允许一个零件',
            PartNeedRegister: '零件未全部入库,需要在系统中登记差货信息',
            ChangeSheetMustOneSupplier: '退换货必须是同一个供应商',
            LossNumLowStocks: '盘亏的数量必须小于当前库存量',
            ProfitPartRegister: '零件多余登记',
            EmptyReceiveSheet: '不能创建空入库单',
            BoxHasPartsNotAllowDel:'箱子里面有零件,不允许删除',

            Day: '天',
            LagerThan: '大于',
            Equal: '等于',
            AddNoStockMsg: '在系统中没有查询到该零件的库存信息,不能进行盘亏',
            AddNoStockSN: '在系统中没有查询到该包材编码的库存信息,无法申领',
            PleaseInput: '请输入',
            PInputReceiveNum: '请输入收货数量',
            LowTrayNum: '组托的总数量必须等于该零件在托内的实际数量',
            NumMustLow: '输入的数量不能大于实际的数量',
            ReceivableNumLowRequire: '应收数量不能大于需求数量',
            NoResultFind: '没有在系统中找到该区域数据',
            NotificationNotDone: '盘点单中的零件未全部录入完毕',
            PackageNeedSheet: "翻包任务中未查询到该收货托号",
            NotificationErrk: '盘点单据明细未全部分析完毕',

            Total: "共",
            Bar: "条",
            Record: "记录",

            NotSameWareHouse: "请注意：您填写的VIN号所在仓库与该盘点单指定的仓库不符!!!",
            ThisVINHasNoCarInfo: "对不起，您填写的VIN号，未找到车辆信息...",
            WrongStoreLocationWithSelected: '请注意，库位不符时，请填写正确库位',
            UnderStock: '库存不足',
            PInputCostCenter: '请录入单据的成本中心相关信息',
            ArtHasThisPart: '工艺已关联该零件',
            ReleaseTrayErr: '托内有零件不能进行释放',
            MessageToGFO: '的记录到GFO吗？',
            NoAppMsg: '请加入申请单,进行提交',

            ConfirmTransferStart: '确认开始移库',
            OutLocReason: '退台描述',
            ConfirmTransferDone: '确认移库完成',
            NotificationNoData: '请准备好要盘点的零件数据,进行盘点',
            NotificationAddRepeat: '该零件已经加入盘点申请单,请确认',
            ChooseTheSameWmNo: '原仓库和目的仓库不能是同一个',
            AsnRepeat: 'ASN单号已经存在',
            ReceiveErra: 'ASN零件实收数量全为0,请联系供应商处理',
            UnShelvePlease: '请先完成下架',
            SheetHasPortionReturn: '单据已经部分还料',
            UnReadySheet: '单据未完成所有的移库操作,请检查',

            RepackageDlocNeeded: '请选择一个翻包台',
            NoRepackageTask: '未指定翻包任务',
            PInputPart: '请输入零件数量',
            ShelveNoRepeat: '单据明细已经有该料架编码',

            ConfirmStockUnhold: '确认解冻选中记录',
            ConfirmVerify: '确认审核',

            Warning: '警告',
            DateStartLagerThanEnd: '开始时间不能大于等于结束时间',
            NoAppMsgTo: '请准备好数据进行提交',
            PartAddRepeat: '该零件已经加入到该组中,不能重复添加',
            GreenPartNotNeed: '该零件不需要搬运到绿色通道上架区',

            ConfirmSubmitQuota: '确认要提交该信息吗？注意：已配供应商的状态都会更改为“待审核”，需要重新审核才会生效，请及时审核。',
            RepeatQuota: '已经存在已配列表中，请勿重复添加。',
            QuotaOrMinSplitRequired: '供应商优先级或者配额为必填项，请修改。',
            SupplierQuotaHasOverdue: '供应商的配额有效时间已过期，请删除。',
            SupplierContractHasOverdue: '采购协议已过期，请删除。',
            NoChooseAnySupplier: '未选择任何供应商。',
            TotalQuotaNot100: "仓库{WmNo},配额总和不等于100%，请修改。",
            OnceImportEqualOnePlan: "PS:一次导入会按不同仓库生成多个计划（相同仓库会合并为一个计划，主体信息以同仓库第一条信息为准）。",
            /**********售后索赔--开始**********/
            PleaseAddBelow: '请在下面追加对“',
            DeRemark: '”的备注：',
            AfterSaveCantEdit: '备注保存后不允许修改，但可以继续追加。',
            PleaseAddRemarkBelow: '请在下面输入备注：',
            RefustOrReturnAddRemak: '进行退回或拒绝操作时，请先填写原因。',
            PleaseSelectAuthorizationType: '请先选择预授权类型。',
            New: '新建',
            Edit: '编辑',
            Reply: '批复',
            PayYearMonthToDealer: '{PayYear}年{PayMonth}月保修付款清单',
            DealersNeedToSettleThisMonth: '本月需结算经销商：{CheckoutCount}家',
            HasAuditDealers: '已审核：{HasAuditCount}家',
            AuditingDealers: '待审核：{AuditingCount}家',
            WaitingPayToDealer: '不含税金额：{WaitPayAmount}元',
            TaxPayDealer: '税额：{TaxPayDealer}元',
            TotalPayToDealer: '共计：{WaitPayTotalAmount}元',
            ConfirmReceiveWithPayNo: '确认已经收到付款清单号为[{PayNo}]的发票了吗？',
            ConfirmHasPaidWithPayNo: '确认已经给付款清单号为[{PayNo}]打款了吗？',
            ConfirmHasAccountingWithPayNo: '确认已经给付款清单号为[{PayNo}]记账了吗？',
            InvoiceNoticeDetail: '贵司 {PayYear} 年 {PayMonth} 月 的保修费用不含税金额为 {Amount} 元，税额 {TaxTotal} 元，共计 {TotalAmount} 元。 请核对后，按以下明细开具增值税发票，寄达我司。',
            InvoiceNoticeDetailDealerRebate: '贵司 {Title} 不含税金额为 {Amount} 元，税额 {TaxTotal} 元，共计 {TotalAmount} 元。 请核对后，按以下明细开具增值税发票，寄达我司。',
            InvoiceInformationAndAddress: '增值税发票开具信息及邮寄地址',
            ClmSelect: '请选择',
            ComfirmDeleteSelectedMutliData: '确认删除选中的【[DelNum]】条数据吗？',
            ComfirmReturnSelectedMutliData: '确认退回选中的【[Num]】条数据吗？',
            ComfirmRefuseSelectedMutliData: '确认拒绝选中的【[Num]】条数据吗？',
            ComfirmAdoptSelectedMutliData: '确认通过选中的【[Num]】条数据吗？',
            ComfirmReceiveMutliData: '确认要收货选中的【[Num]】条数据吗？',
            ComfirmCheckMutliData: '确认要验票通过选中的【[Num]】条数据吗？',
            ComfirmPaidMutliData: '确认要付款选中的【[Num]】条数据吗？',
            ComfirmDeleteSelectedSignleData: '确认删除单据号【[DelNo]】的数据吗？',
            ComfirmSubmitSelectedSignleData: '确认提交单据号【[DelNo]】的数据吗？',
            ComfirmSelectedSignleData: '要确认单据号【[DelNo]】的数据吗？',
            ComfirmRejectSelectedSignleData: '确认拒绝单据号【[DelNo]】的数据吗？',
            ComfirmReturnSelectedSignleData: '确认退回单据号【[DelNo]】的数据吗？',
            ComfirmAdoptSelectedSignleData: '确认通过单据号【[DelNo]】的数据吗？',
            ComfirmSaveAndSubmitData: '确认保存并提交单据号【[DelNo]】的数据吗？',
            PleaseAddFaultPhenomenonFirst: '请先在备注中填写故障描述！',
            PleaseAddFaultDiagnosisFirst: '请先在备注中填写故障诊断！',
            PleaseAddRepairProgrammeAndResultFirst: '请先在备注中填写维修方案及结果！',
            PayYearMonthToDealerWithDealerInfo: '{PayYear}年{PayMonth}月{DealerName}（代码：{DealerCode}）对账清单（单位：元）',
            ThisMonthReceivables: '本月待收款金额：{WaitPayAmount}元',
            VINHasNoRelatedInfo: '对不起，该VIN未找到任何相关信息！',
            VINIllegal: '对不起，您的VIN非法，请检查是否为17位。',
            ClmHasRepeatDealer: '对不起，该经销商已经存在，请更换！',
            ClmTravelMileageMoreThanTravelMileageEnd: '对不起，开始里程数不能大于结束里程数！',
            ClmOnlyMainWorkHour: '对不起，只能同时拥有一个主工时/主零件！',
            ClmHasMainPartButNoSupplier: '对不起，主零件({PartNo})的供应商未找到或尚未选择！',
            ClmCantPrintNewWarranty: '对不起，无法打印状态为“新建”的保修单！',
            ClmCantGetPartPrice: '如您需要的零件未找到，请检查是否尚未通过财务定价。',
            ClmHasRepeatWorkHour: '操作失败，在工时费用中已包含该工时！',
            ClmHasRepeatPart: '操作失败，在零件费用中已包含该零件！',
            ClmHasRepeatOther: '操作失败，在其他费用中已包含该费用！',
            ClmRepairEndFirst: '对不起，请先填写维修结束日期，再对零件费用做处理！',
            ClmVehicleTypeFirst: '对不起，未匹配到车型，不能查询工时！',
            ClmDealerFirst: '对不起，未匹配到经销商，不能查询工时！',
            ClmConfirmDeleteFromPayItem: '确定要从该付款清单中删除该保修单（单号：{WarrantyNo}）吗？',
            ClmWorkCodeNotBeEmpty: '工时代码不能为空！',
            ClmWorkRemarkNotBeEmpty: '工时描述不能为空！',
            ClmWorkHoursNotBeEmpty: '工时数量不能为空！',
            ClmWorkPriceNotBeEmpty: '工时价格不能为空！',
            ClmRepairItemHasOneNoPrice: '对不起，该维修包中的零件/工时（代码:{Code},描述：{Remark}）的价格尚未维护，无法完成自动添加！',
            ClmChooseRepairPackage: '您已经选择了指定包，是否立即覆盖您目前的工时费用与零件费用？',
            ClmIsTrigger3R: '是否需要触发',
            ClmReturnMustChooseOne: '对不起，退回操作只允许单个操作！',
            ClmCloseJobGreatThanRepairEnd: '对不起，结算日期必须大于等于维修结束日期！',
            ClmPleaseSelectVINFirst: '请先选择VIN，再进行预授权选择！',
            clmPleasePercentTotalNotEqual100: '您提交的客户、经销商、厂商的比例总和不等于100。',
            ClmReplyQuantityMustLessThanOrEqualQuantity: '对不起，批复数量必须小于等于原数量。',
            ClmPleaseSelectVINFirst: '请先选择VIN，再进行预授权选择！',
            ClmPleaseInputRepairStartFirst: '请先填写维修开始日期！',
            ClmPayToDealerExport: '区间导出',
            ClmCreatePaySelected: '确认要将选中的[num]条数据生成付款清单吗（生成后经销商可直接开票）？',
            ClmCreatePayAll: '确认要将所有未付款的数据生成付款清单吗（生成后经销商可直接开票）？',
            ClmWrongPage: '对不起，您进入的页面错误，点击OK将自动跳往正确的页面。',
            ClmOnlyCheckOwnerDealerInfo: '对不起，您只能查看自己经销商的信息。',
            ClmJobSettingMonth: '每{interval}个月的{Ordinal}日执行一次',
            ClmJobSettingWeek: '每{interval}周的星期{Ordinal}执行一次',
            ClmJobSettingDay: '每{interval}天执行一次',
            ClmIsRefreshVIN: '确定要刷新VIN信息吗？',
            /**********售后索赔--结束**********/
            /**********采购管理--开始**********/
            NotWritePartInfo: '零件信息尚未填写!',
            ConfirmCreatePurchasePlan: '确认要将选中的记录生成采购计划吗？',
            SpmQuotaCountMoreThanContractCount: '配额的数量大于协议数量。超出数量为{Quantity}',
            SpmContractCountMoreThanQuotaCount: '协议的数量大于配额数量，且协议数量不等于1。超出数量为{Quantity}',
            FixQuotaNeedManualDel: '此错误需手动删除配额！',
            PartsHasInListPleaseEdit: '零件号：{Parts}，未进行添加。原因：已经存在于列表中，您可以直接修改。',
            PleaseSelectCompanyWarehouseFirst: "请优先选择公司和仓库！",
            ErrorTelForamt: '座机电话格式不正确',
            ErrorFaxForamt: '传真格式不正确',
            BoxHasInListPleaseEdit: '合箱号：{boxNum}，未进行添加。原因：已经存在于列表中，您可以直接修改。',
            PackingHasInListPleaseEdit: '装车单号：{PackingCode}，未进行添加。原因：已经存在于列表中，您可以直接修改。',
            OrderHasTransferred: '采购订单已经生成成功！',
            OutSideOrderHasTransferred: '委外订单已经生成成功！',
            TelOrPhoneOrEmailMustHaveOne: '电话、手机和邮箱至少填写一项！',
            ConfirmFinanziariaApproval: '确认要财务审核吗？',
            ConfirmFinanziariaRefuse: '确认要财务驳回吗？',
            /**********采购管理--结束**********/
            ErrorEmailForamt: '邮箱格式不正确',
            ErrorMobileForamt: '手机格式不正确',
            ChooseOneSN: '请至少选择一项',
            PleaseCheckIfHasAgreementOrInBelow: '温馨提示：如果未找到指定供应商，请检查其是否尚未签采购协议或者在已配供应商中。',
            StartTimeMustLessThanEndTime: '的开始时间不能小于等于结束时间',
            HasRepeatSupplierDate: '该经销商({SupplierNo})已存在订单日历，请检查。',
            HasRepeatWmDate: '该仓库({WmNo})已存在订单处理时间，请检查。',
            SupplyCycleCantEmpty: '供货周期不能为空。',
            PartHasNoContract: '零件号：{PartNo},未找到已签订协议的供应商，无法完成保存！',
            PleaseMeasureOnleOneForEdit: '请确保只有一行选中的情况下进行修改！',
            PurchasePlanCreateSuccess: '采购计划生成成功！',
            OnlyNumberWithDecimalSix: '只能输入数字，并且最多只能6位小数!',
            OnlyNumberWithDecimalSixb: '只能输入大于0的数字，并且最多只能6位小数!',
            OnlyNumberWithDecimalFour: '只能输入数字，并且最多只能4位小数!',
            OnlyNumberWithDecimalTwo: '只能输入数字，并且最多只能2位小数!',
            OnlyNumber: '只能输入数字!',
            OnlyDnum: '只能输入大于0的整数,小数',
            OnlyNaturalNumber: '只能输入大于0的整数!',
            CantMinMoreThanMax: '最小审批金额不能大于等于最大审批金额！',
            OnlyTwoDecimalsNumber: '只能输入数字，且最多两位小数！',
            OnlyThreeDecimalsNumber: '只能输入数字，且最多三位小数！',
            OnlyTwoDecimalsNumberLessThanHundred: '只能输入不大于100的数字，且最多两位小数！',
            /**********系统文件上传**********/
            UploadFileTitle: '添加系统上传文件',
            FileListTitle: '上传文件列表：',
            FileUploadExcel: '请上传.xlsx或xls格式文件',
            CantStartOrEndWithNotOwnInventory: '对不起，该条盘点单的盘点人并不是您，请选择盘点人是自己的盘点单进行开始/结束。',

            //zyc
            VINWarehouseNonExistent: 'VIN编码不存在/原库位/仓库不存在',
            ErrorVINLEN17: '输入错误,VIN码长度必须17位',
            TransferSuccessNotAllowedUpdate: '移库成功的记录不允许修改',
            TransferSuccessNotAllowedDel: '移库成功的记录不允许删除',
            TransferID: '移库单号',
            TransferSuccess: '移库成功',
            RepairSuccess: '维修成功',
            ReturnFactorySuccess: '返厂成功',
            RepairSuccessNotAllowedUpdate: '返修成功的记录不允许修改',
            RepairSuccessNotAllowedDel: '返修成功的记录不允许删除',
            ReturnFactoryNotAllowedUpdate: '返厂成功的记录不允许修改',
            ReturnFactoryNotAllowedDel: '返厂成功的记录不允许删除',
            ReturnFactoryNotAllowedFC: '返厂成功的记录不允许再次返厂',
            RejectedNotAllowedUpdate: '订单锁定、总装上线、车辆报交、审核中的状态不可以修改',
            RejectedNotAllowedDel: '只有起草/提交状态的采购订单才可以删除',
            StatePurchaseOrdersCanBeRviewed: '只有起草/提交,状态的采购订单才可以审核',
            VINNonExistent: 'VIN码不存在',
            WhetherToAudit: '是否要审核',
            WhetherToDel: '是否要删除',
            DetermineWhetherToGenerateVIN: '是否确定生成vin编码',
            RecordsThatHaveBeenGeneratedDoNotAllowBinding: '已经生成的记录不允许解绑',
            CanOnlySelectRecordsInTheAudit: '只能选择审核中的记录',
            TheAuditListCannotBeDeleted: '审核通过的转储单不能删除',
            WhetherToGenerate: '是否要生成',
            TransferOrderCode: '转储订单',
            RepairID: '返修单号',
            QuantityDemandDateMustFilledout: "数量/需求日期必须填写",
            TheSelectedRecordPurchaseOrderIsNotAllowedGenerate: '选择的记录采购订单为空不允许生成',
            SelectTheRecordsYouWantToGenerate: '请选择要生成的记录',
            RejectedStatus: '已驳回',
            ReturnFactoryID: '返厂单号',
            //zyc
            TrayNoPart: '选中的托内无零件!',
            MoveTo: '移至',
            NoFreeDloc: '无空闲的库位进行搬运!',
            PChooseOrder: '请选择订单',
            PChooseAllotOrder: '请选择调拨单',
            CreateOrder: '创建成功,入库单编号:',
            SureShelveThis: '确认上架到库位',
            PChoosePart: '请选择零件',
            PChoosePartSupplier: '请选择零件的供应商',
            PChooseReason: '请选择原因',
            PChooseNum: '请输入数量',
            SubmitSuccess: '提报成功！',
            PTrayThenReceive: '请先组托再进行收货完成',
            PRThenReceive: '请先组托再收货完成',
            NoPermissionCount: '不能大于实际的差异数量',
            PartNoTrayDone: '零件未全部组托完毕,请检查',
            NoAvailableToTray: '所有零件已经组托完毕,无可用组托零件',
            AlreadyOam: '翻包台已经维护了该存储类型',
            DetailNoEdit: '订单明细状态已审核禁止操作',
            AlreadyVerify: '您选择的信息已被审批，不能操作',
            PChooseAReason: '请选择一种原因',
            NoAvailableDloc: '没有合适的库位',
            AllWaitSubmit: '所有待提交',
            NoWaitSubmit: '没有待提交的记录',
            NoRepackageDloc: '请在系统中维护该区域的翻包库位,存储类型',
            ExistCustomerGroupNo: '已存在编号为{GroupNo}的客户群组',
            NotCancel: '您选择的信息不是取消状态，不能审批',
            NotGreenPathOrder: '您选择的信息不是绿色通道订单，不能审批',
            NotGreenPathWait: '您选择的信息不是待审核状态，不能审批',
            NotCustomOrder: '您选择的信息不是订制订单，不能审批',
            TimeErr: '日期格式有误',
            NoBox: '未选择任何合箱号，请确认后重试!',
            ConfirmHoldDone: '确认冻结',
            ConfirmUnFrozenDone: '确认解冻',
            ConfirmDiscardDone: '确认报废',
            PartHasHold: '零件已经被冻结',
            HasDefaultWm: '该经销商已存在默认仓库，请取消勾选默认仓库',
            HasSameWm: '该经销商已存在相同的仓库，请重新选择',
            PChoosePackage: '请选择包材',
            PChooseShelve: '请选择料架',
            PInputShelve: '请输入料架编码',
            ExportErr: '导出失败',
            RackingQtyClaim: '上架托最大数量必须是包装模数的整数倍',
            EffectiveDateMustLessThanExpiryDate: '的开始日期不能小于等于截止日期',
            PartForShelveErra: '托内零件数量不足最小包装模数,无法生成翻包任务',
            PartForShelveErrb: '托内部分零件数量不足最小包装模数,无法生成翻包任务',
            NoTimeHasSelected: '已选择的周{week}没有选择上午或下午时段,请检查',
            NoWeekHasSelected: '已选择周{week}的{time}时段但未选择星期,请检查',
            PleaseChooseOneItem: '请选择一条数据进行操作',
            NoInfoReadyToSumit: '没有状态为未提交的数据',

            ConfirmGenerateBatch: '确认生成批次',
            NotInternalAudit: '所选零件[PartNo]不是内部待审核状态，禁止审核!',
            NotInternalAuditRole: '所选零件[PartNo]当前登录用户没有审核角色，禁止审核!',
            NotSapAudit: '所选零件[PartNo]不是财务待审核状态，禁止审核!',
            BatchHasTransferred: '批次已经生成成功！',
            BatchGenerateError: '批次生成失败，请选择返件类型，需求方，收货方都相同的零件',
            ImportHasRepeatData: '导入的数据中相同经销商存在相同的仓库，请检查',
            ImportHasDefaultData: '导入的数据中相同经销商存在多个默认仓库，请检查',
            ImportHasRepeatDealerData: '导入的数据中存在多个相同的经销商代码',
            WeekHasNoPairData: '上午或下午中的星期未能匹配到供货周期中的星期',
            NotPartType: '所上传数据在主数据中的零件类型不是(零件)，禁止上传',

            ConfirmPacking: '确认装箱',
            ConfirmCancelPacking: '确认取消装箱',
            PackingFinished: '装箱完成',
            CancelPackingFinished: '取消装箱完成',
            PackingFailed: '装箱失败，请选择未装箱的零件',
            CancelPackingFailed: '取消装箱失败，请选择已装箱的零件',
            DeliverInfo: '发货信息',
            ReceiveInfo: '收货信息',
            SapStatusWrong: '所选零件必须全部为内部已审核状态才能上报SAP',
            SubmitStatusWrong: '所选备件必须全部为待提交状态才能继续提交',
            /**保修索赔返件开始**/
            InStoreFinished: '入库完成',
            InStoreFailed: '入库失败',
            StoreFailedTags: '请选择已收货，未入库的旧件',
            PleaseSelectOldPartStock: '请选择旧件库存',
            NotFoundPriceGroup: '未找到所填写的价格组信息',
            ConfirmNotify: '确认通知',
            OnlyCanDeleteStatus: '只能删除待提交与已驳回的信息',
            OnlyCanSubmitStatus: '只能提交待提交与已驳回的信息',
            PlsSelectDate: '请填写日期',
            InputWrongNumber: '数量输入错误',
            ConfirmInStore: '确认入库',
            EmptyGroupName: '客户组未填写或填写不正确',
            NullGroup: '系统中未找到客户组，请确认名称填写正确',
            NullData: '未找到有效的价格模拟确认数据',
            DNPFail: '实际DNP填写不正确',
            MSRPFail: '实际MSRP填写不正确',
            WrongStatus: '数据不是待提交状态，禁止导入',
            DeleteBatchError: '只能删除未发货的批次',
            ConfirmPrint: '是否打印选中的零件标签？',
            ConfirmUnPrint: '是否设置选中的零件标签不打印？',
            ConfirmSetWaitPrint: '是否设置选中的零件标签待打印？',
            ClmSelfAuthorizationAlert1: "厂商、经销商、客户工时比例之和必须等于100",
            ClmSelfAuthorizationAlert2: "厂商、经销商、客户零件比例之和必须等于100",
            ComfirmIssuedSelectedSignleData: '确认发布单据号【[DelNo]】的数据吗？',
            ComfirmIssuedSelectedMutliData: '确认发布选中的【[DelNum]】条数据吗？',
            ComfirmPassSelectedSignleData: '确认通过单据号【[DelNo]】的数据吗？',
            ComfirmPassSelectedMutliData: '确认通过选中的【[DelNum]】条数据吗？',
            RepairPackagesIsRequired: '服务活动维修包是必须的',
            HourIsRequired: '工时是必须的',
            RepairPackageContentNotAllowEmpty: '服务活动维修包内容不能为空',
            SuccessFilterVin: '存在重复VIN,已过滤',
            VinImportSuccess: 'VIN导入成功',
            MaxAmountCanNotLessThanMinAmount: '最高金额不能低于最低金额',
            OnlyInZeroAndOne: '0到1之间',
            NotZipCode: '不是正确的邮编',
            NotPhoneNum: '不是手机号',
            ReturnDuty: '返件责任',
            ReceiveRemark: '返件说明',
            OnlyAllowDelete: '只允许删除',
            OnlyAllowEdit: '只允许修改',
            UnSubmitOrRejectScrap: '未提交或已驳回的销毁单',
            OnlyAuditInAudit: '只能审核状态为审核中的销毁单',
            ScrapModelRequired: '销毁模式必填',
            ArrivalDateRequired: '到店日期必填',
            PartRequired: '零件是必需的',
            ConfirmOutbound: '确认出库',
            CodeExists: '编号已存在',
            PublishedRecallForbidEdit: '已发布的服务活动禁止修改',
            PublishedRecallForbidDelete: '已发布的服务活动禁止删除',
            CantEditFailedInfo: '该信息已失效禁止编辑',
            ConfirmPublish: '确认发布',
            VinImportFail: 'VIN导入失败',
            PartImportSuccess: '零件导入成功',
            PartImportFail: '零件导入失败',
            SuccessFilterPart: '存在重复零件,已过滤',
            ConfirmNewReturnRequest: '确认创建新的零件返回需求？',
            /**保修索赔返件结束**/
            CantBiggerThanUnreceiveQty: '零件号{PartNo}的订单需求数量不能大于未收货数量',
            CantBiigerThanDemandQty: '零件号{PartNo}的应收数量不能大于订单需求数量',
            CanNotBeZero: '零件号{PartNo}的应收数量与订单需求数量不能为0',
            NoEntrustZoneFound: '仓库下未找到默认委外存储区',
            ReceivePartNumHasBiggerThanZero: '收货零件数量必须大于0',
            AlreadyHasZCD: '已选择装车单，请删除后再继续操作',
            CantAuditBecauseNoNeed: '审核失败，主机厂不需要审核非呆滞件调拨',
            GreenPathOrderHasAudit: '绿色通道订单必须完成审核才能进行转换',
            AddWarrantySuccessed: '成功新增保修单：{WarrantyNo}',
            CantAboveStock: '转换数量不能大于库存总和',
            CantTransZero: '转换数量为0，禁止转换',
            ClmPayPrintInfo: '本月需结算经销商  {CheckoutCount}  家，不含税金额 {WaitPayAmount} 元，税额 {TaxPayDealer} 元，共 {WaitPayTotalAmount} 元。',
            TotalRatesNeOne: '12个月的采购目标分配比例总和必须等于1',
            PleaseChooseDealer: '请选择经销商',
            PublishedClauseForbidDelete: '已发布的三包条款禁止删除',
            ValidityEndMustGreaterThanStart: '有效期截止日期必须大于开始日期',
            ProductionEndMustGreaterThanStart: '生产截止日期必须大于开始日期',
            ComfirmCancelPublishSelectedSignleData: '确认取消发布单据号【[DelNo]】的数据吗？',
            ComfirmCancelPublishSelectedMutliData: '确认取消发布选中的【[DelNum]】条数据吗？',
            ComfirmRejectPublishSelectedSignleData: '确认驳回单据号【[DelNo]】的数据吗？',
            ComfirmRejectPublishSelectedMutliData: '确认驳回选中的【[DelNum]】条数据吗？',
            NotChooseAnyDealer: '未选择任何经销商。',
            NotChooseAnyPart: '未选择任何零件。',
            TaskTypeAlreadyExisting: '任务类型已经存在，请检查！',
            TaskTypeAlreadyExisting: '任务类型已经存在，请检查！',
            HaveTaskInThisTaskType: '在此任务类型下面存在任务关联，请先删除关联的任务！',
            ConfirmChange: '确认更改？',
            WarrantyTotal: '个保修',

            /**********备件库存**********/
            AmountBorrowedMustPositive: '借料的数量必须是正数',
            /**********备件库存**********/

            /**********批售下单、销售预测 tjh**********/
            SubmitSuccess: '提交成功！',
            SubmitFailed: '提交失败！',
            QuantityMustBeGreaterThanZero: '数量必须大于0！',
            QuantityForecastWeekMustFilledout: '数量/预测周必须填写！',
            QuantityWarehouseMustFilledout: '数量/仓库/车辆用途/资金类型必须填写！',
            AdditionalSOLimit: '可下单数量',

            MainPartIsRequired: '请选择主因零件',
            MainHourIsRequired: '请选择主因工时',
            SettlementMonthError: '结算开始日期不能大于结算截止日期',
            StockAdjust: '库存调整',
            NoBasicPriceHasFound: '所选零件未定义过基础价格,请先维护基础价!',
            NoPickAreaHasFound: '未找到该仓库的拣配存储区或库位!',
            NoBoxAreaHasFound: '未找到该仓库的合箱存储区或库位!',
            NoShippingAreaHasFound: '未找到该仓库的发运存储区或库位!',
            PleasePackageBefore: '请先装箱再打印',
            VinRequired: 'VIN是必需的',
            PartRequired: '零件代码是必需的',
            DealerPortFailed: '审核失败!经销商接口调用失败!',
            PartOrSupplierAtLeastOne: '零件和供应商至少有一个',
            NotRecallCode: '活动代码格式不正确',
            ConfirmDeliver: "确认发货",
            PleaseChoosePackageItem: '请选择已装箱的批次',
            NotPickUpStatus: '操作失败,所选数据不是待取货状态',
            PickCountCantBiggerThanNeed: '实际取货数量不能大于预计取货数量',
            NotStartOrSapCancel: '选择的信息不是待审核或财务审核驳回状态，禁止审核',
            NotInternalAuditStatus: '选择的信息未通过业务审核',
            ExpressIsNotExist: '物流信息不存在，请删除批次，重试一下。',
            ConfirmReceive: '确认收货',
            ReceiveComplete: '收货完成',
            ConfirmInStore: '确认入库',
            InStoreComplete: '入库完成',
            ReceiveDebitError: '是否收货等于【是】,同时收货状态不等于【PR01-已收货】或【PR06-待定】的数据才允许添加异常扣款',
            InstoreDebitError: '是否入库状态等于【是】,同时入库状态等于【PI01-正常】不允许异常扣款',
            NoPartInfo: '没有可查询的零件信息',
            ComfirmDebit: '你确认要全部扣除相关款项吗',
            /**********保修审计，预算监控--开始**********/
            YearsMustBeDigit: '年数必须为数字',
            ClmNoBudgetConfigExist: '该年度该车型没有单车保修预算配置',
            ClmAuditForbiddenAfterStart: '已经开始的审计计划禁止编辑筛选',
            ClmAuditPleaseSubmitWarrantyFilters: '请提交保修清单',
            ClmAuditEstimatedDateLimit: '预计审计日期的月份必须大于上次审计日期的月份',
            ClmAuditPlanExist: '审计计划已存在',
            ClmAuditNoAuditRule: '该经销商无法定位审计规则',
            ClmAuditRuleSuccessSaved: '保存成功',
            ClmAuditFullyFillInBeforSubmit: '请将扣款金额填写完整再提交',
            ClmAuditUploadFailed: '上传失败',
            /**********保修审计，预算监控--结束**********/
            ClmChooseSelfScrap: '请选择自行销毁的销毁单',
            NotJustSubmitStatus: '不是已上报状态禁止审核',
            CantMixOptions: '不能混合选择普通调拨与呆滞件调拨',
            ChooseDataNoSupplier: '请选择没有供应商的数据',
            NoDebitData: '无扣款数据',
            CantDeleteNotSaveData: '该经销商未设置安全金额无法删除!',
            ConfirmSwitchOnOrder: '是否确认开启转换',
            ConfirmSwitchOffOrder: '是否确认关闭转换',
            ConfirmInvalid: '确认失效',
            ClmBoxNoTooLong: '箱号过长，每个批次建议不超过50个货箱',
            PackageContentNotAllowEmpty: '活动包内容不能为空',
            ComfirmStopSelectedSignleData: '确认终止单据号【[DelNo]】的数据吗？',
            ComfirmStopSelectedMutliData: '确认终止选中的【[DelNum]】条数据吗？',

        };
    });