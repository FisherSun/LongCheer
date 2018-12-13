define(['durandal/system', 'plugins/router', 'durandal/app', 'jsRuntime/configManager', 'jsRuntime/utility'],
    function (system, router, app, cm, utility) {
        var mapRouter = function () {
            router.reset();
            router.map([
                { route: '', title: '首页', moduleId: 'app/home' },
                //{ route: 'home', title: '首页', moduleId: 'app/home' },
                { route: 'login', title: '登陆', moduleId: 'app/login/login' },
                { route: 'UnauthorizedUrl', title: '没有权限访问', moduleId: 'app/error' },
                { route: 'check(/:id)', title: 'bbb', moduleId: 'app/check/index' },
                { route: 'query', title: '登陆', moduleId: 'app/query/index' },
                { route: 'sysMgt/MdmItemCodeList', title: '字典表管理', moduleId: 'app/sysMgt/MdmItemCodeList' },
                { route: 'sysMgt/MdmItemCode/:id', title: '字典表信息', moduleId: 'app/sysMgt/MdmItemCode' },
                { route: 'sysMgt/SysPdaWorkSetList', title: 'PDA区域设置管理', moduleId: 'app/sysMgt/SysPdaWorkSetList' },
                { route: 'sysMgt/SysPdaWorkSet/:id', title: 'PDA区域设置', moduleId: 'app/sysMgt/SysPdaWorkSet' },
                { route: 'sysMgt/warehouses', title: '仓库管理', moduleId: 'app/sysMgt/warehouses' },
                { route: 'sysMgt/warehouse/:id', title: '仓库信息', moduleId: 'app/sysMgt/warehouse' },
                { route: 'sysMgt/dropdownDemo', title: '级联下拉框demo', moduleId: 'app/sysMgt/dropdownDemo' },
                { route: 'sysMgt/RoleFunctionManage', title: '角色权限管理', moduleId: 'app/sysMgt/RoleFunctionManage' },
                { route: 'sysMgt/FunctionManage', title: '权限管理', moduleId: 'app/sysMgt/FunctionManage' },
                { route: 'sysMgt/SysApiActionConfigList', title: 'API管理', moduleId: 'app/sysMgt/SysApiActionConfigList' },
                { route: 'sysMgt/SysApiActionConfig/:id', title: 'API信息', moduleId: 'app/sysMgt/SysApiActionConfig' },
                { route: 'sysMgt/SysUserExtendList', title: '用户扩展管理', moduleId: 'app/sysMgt/SysUserExtendList' },
                { route: 'sysMgt/SysUserExtend/:id', title: '用户扩展信息', moduleId: 'app/sysMgt/SysUserExtend' },
                { route: 'sysMgt/SysUserVehWarehouseList', title: '用户整车仓库管理', moduleId: 'app/sysMgt/SysUserVehWarehouseList' },
                { route: 'sysMgt/SysUserVehWarehouse/:id', title: '用户整车仓库信息', moduleId: 'app/sysMgt/SysUserVehWarehouse' },
                { route: 'sysMgt/RgmDealerBelongQYDD', title: '经销商所属区域经理', moduleId: 'app/sysMgt/RgmDealerBelongQYDD' },
                { route: 'claimMgt/Guarantee/:id', title: '保修信息', moduleId: 'app/claimMgt/Guarantee' },
                { route: 'claimMgt/Guarantees', title: '保修申请列表', moduleId: 'app/claimMgt/Guarantees' },
                { route: 'sysMgt/RoleAmountList', title: '审批角色金额管理', moduleId: 'app/sysMgt/RoleAmountList' },
                { route: 'sysMgt/RoleAmountEdit/:id', title: '审批角色金额管理', moduleId: 'app/sysMgt/RoleAmountEdit' },
                { route: 'sysMgt/Salesorder', title: '销售业务', moduleId: 'app/sysMgt/Salesorder' },
                { route: 'sysMgt/SalesorderAdd/:id', title: '销售业务信息', moduleId: 'app/sysMgt/SalesorderAdd' },
                { route: 'claimMgt/PayToDealerList', title: '月度付款清单', moduleId: 'app/claimMgt/PayToDealerList' },
                { route: 'claimMgt/PayToDealer/:id', title: '月度付款清单详情', moduleId: 'app/claimMgt/PayToDealer' },
                { route: 'sysMgt/PoOder', title: 'PO手工触发转SO', moduleId: 'app/sysMgt/PoOder' },

                { route: 'sysMgt/CostCenterList', title: '成本中心管理', moduleId: 'app/sysMgt/CostCenterList' },

                { route: 'spmMgt/MdmDealerRebateList', title: '经销商返利管理', moduleId: 'app/spmMgt/MdmDealerRebateList' },
                { route: 'spmMgt/MdmDealerRebate/:id', title: '经销商返利添加修改', moduleId: 'app/spmMgt/MdmDealerRebate' },
                { route: 'spmMgt/MdmDealerRebateImport', title: '经销商返利导入', moduleId: 'app/spmMgt/MdmDealerRebateImport' },

                { route: 'spmMgt/MdmSecurityAmountList', title: '经销商安全金额配置列表', moduleId: 'app/spmMgt/MdmSecurityAmountList' },
                { route: 'spmMgt/MdmSecurityAmount/:id/:dealerCode/:dealerName', title: '经销商安全金额配置', moduleId: 'app/spmMgt/MdmSecurityAmount' },
                { route: 'spmMgt/MdmSecurityAmountImport', title: '安全金额配置导入', moduleId: 'app/spmMgt/MdmSecurityAmountImport' },
                /****************************************************整车-开始*******************************************/
                { route: 'vehCar/basMgt/vehOemPlaceList', title: '工厂管理', moduleId: 'app/vehCar/basMgt/vehOemPlaceList' },
                { route: 'vehCar/basMgt/vehOemPlace/:id', title: '工厂信息', moduleId: 'app/vehCar/basMgt/vehOemPlace' },
                { route: 'vehCar/basMgt/vehWarehouseList', title: '仓库管理', moduleId: 'app/vehCar/basMgt/vehWarehouseList' },
                { route: 'vehCar/basMgt/vehWarehouse/:id', title: '仓库信息', moduleId: 'app/vehCar/basMgt/vehWarehouse' },
                { route: 'vehCar/basMgt/VehWarehouseAllowDeliveryAndWriteOff', title: '仓库发货过账和冲销权限控制', moduleId: 'app/vehCar/basMgt/VehWarehouseAllowDeliveryAndWriteOff' },
                { route: 'vehCar/basMgt/vehStorageAreaList', title: '存储区管理', moduleId: 'app/vehCar/basMgt/vehStorageAreaList' },
                { route: 'vehCar/basMgt/vehStorageArea/:id', title: '存储区信息', moduleId: 'app/vehCar/basMgt/vehStorageArea' },
                { route: 'vehCar/basMgt/vehStoreLocationList', title: '库位管理', moduleId: 'app/vehCar/basMgt/vehStoreLocationList' },
                { route: 'vehCar/basMgt/VehStoreLocationLockConditionList', title: '库位锁定解锁', moduleId: 'app/vehCar/basMgt/VehStoreLocationLockConditionList' },
                { route: 'vehCar/basMgt/vehStoreLocation/:id', title: '库位信息', moduleId: 'app/vehCar/basMgt/vehStoreLocation' },
                { route: 'vehCar/basMgt/VehStoreLocationImport', title: '导入库位', moduleId: 'app/vehCar/basMgt/VehStoreLocationImport' },
                { route: 'vehCar/InWarehouseMgt/EndScan', title: '入库确认', moduleId: 'app/vehCar/InWarehouseMgt/EndScan' },
                { route: 'vehCar/InWarehouseMgt/CarLocationPrint', title: '库位打印', moduleId: 'app/vehCar/InWarehouseMgt/CarLocationPrint' },
                { route: 'VehCar/InWarehouseMgt/LocationCodePrint', title: '打印库位', moduleId: 'app/VehCar/InWarehouseMgt/LocationCodePrint' },
                { route: 'vehCar/OutWarehouseMgt/OutScan', title: '出库扫描', moduleId: 'app/vehCar/OutWarehouseMgt/OutScan' },
                { route: 'vehCar/OutWarehouseMgt/OutPrint', title: '出库打印', moduleId: 'app/vehCar/OutWarehouseMgt/OutPrint' },
                { route: 'vehCar/OutWarehouseMgt/SceneConfirm', title: '现场确认', moduleId: 'app/vehCar/OutWarehouseMgt/SceneConfirm' },
                { route: 'vehCar/OutWarehouseMgt/OutFactoryConfirm', title: '出厂确认', moduleId: 'app/vehCar/OutWarehouseMgt/OutFactoryConfirm' },
                { route: 'VehCar/InWarehouseMgt/VehCarMoveInList', title: '出入库记录', moduleId: 'app/VehCar/InWarehouseMgt/VehCarMoveInList' },
                { route: 'VehCar/OutWarehouseMgt/VehCarrierBillList', title: '承运单管理', moduleId: 'app/VehCar/OutWarehouseMgt/VehCarrierBillList' },
                { route: 'VehCar/OutWarehouseMgt/VehCarrierBill/:id', title: '承运单信息', moduleId: 'app/VehCar/OutWarehouseMgt/VehCarrierBill' },
                //{ route: 'VehCar/OutWarehouseMgt/CarrierBillPrint', title: '承运单打印', moduleId: 'app/VehCar/OutWarehouseMgt/CarrierBillPrint' },
                //{ route: 'VehCar/OutWarehouseMgt/CarrierBillBeforePrint/:id', title: '承运单打印', moduleId: 'app/VehCar/OutWarehouseMgt/CarrierBillBeforePrint' },
                { route: 'VehCar/OutWarehouseMgt/CarrierBillNestPrint/:id', title: '承运单打印', moduleId: 'app/VehCar/OutWarehouseMgt/CarrierBillNestPrint' },
                { route: 'VehCar/OutWarehouseMgt/CarrierBillElectronicPrint/:id', title: '电子承运单打印', moduleId: 'app/VehCar/OutWarehouseMgt/CarrierBillElectronicPrint' },
                { route: 'VehCar/OutWarehouseMgt/CarrierBillAssignChariot/:id', title: '分配板车', moduleId: 'app/VehCar/OutWarehouseMgt/CarrierBillAssignChariot' },
                { route: 'vehCar/basMgt/vehInWarehousePolicyList', title: '入库策略管理', moduleId: 'app/vehCar/basMgt/vehInWarehousePolicyList' },
                { route: 'vehCar/basMgt/vehInWarehousePolicy/:id', title: '入库策略信息', moduleId: 'app/vehCar/basMgt/vehInWarehousePolicy' },
                { route: 'vehCar/basMgt/vehChariotList', title: '板车管理', moduleId: 'app/vehCar/basMgt/vehChariotList' },
                { route: 'vehCar/basMgt/vehChariot/:id', title: '板车信息', moduleId: 'app/vehCar/basMgt/vehChariot' },
                { route: 'vehCar/basMgt/vehDriverList', title: '板车司机管理', moduleId: 'app/vehCar/basMgt/vehDriverList' },
                { route: 'vehCar/basMgt/vehDriver/:id', title: '板车司机信息', moduleId: 'app/vehCar/basMgt/vehDriver' },
                { route: 'VehCar/basMgt/VehShipmentLineList', title: '运输线路管理', moduleId: 'app/VehCar/basMgt/VehShipmentLineList' },
                { route: 'VehCar/basMgt/VehShipmentLine/:id', title: '运输线路信息', moduleId: 'app/VehCar/basMgt/VehShipmentLine' },
                { route: 'vehCar/basMgt/VehShipmentLineImport', title: '导入运输线路', moduleId: 'app/vehCar/basMgt/VehShipmentLineImport' },
                { route: 'VehCar/basMgt/VehShipmentAreaList', title: '运输区域管理', moduleId: 'app/VehCar/basMgt/VehShipmentAreaList' },
                { route: 'VehCar/basMgt/VehShipmentArea/:id', title: '运输区域信息', moduleId: 'app/VehCar/basMgt/VehShipmentArea' },
                { route: 'VehCar/basMgt/VehCarrierList', title: '承运商管理', moduleId: 'app/VehCar/basMgt/VehCarrierList' },
                { route: 'VehCar/basMgt/VehCarrier/:id', title: '承运商信息', moduleId: 'app/VehCar/basMgt/VehCarrier' },
                { route: 'VehCar/basMgt/VehCarrierImport', title: '承运商导入', moduleId: 'app/VehCar/basMgt/VehCarrierImport' },
                { route: 'VehCar/basMgt/VehDriveWayList', title: '车道管理', moduleId: 'app/VehCar/basMgt/VehDriveWayList' },
                { route: 'VehCar/basMgt/VehDriveWay/:id', title: '车道信息', moduleId: 'app/VehCar/basMgt/VehDriveWay' },
                { route: 'VehCar/basMgt/VehDriveWayCarList/:id/:code', title: '车道车辆信息', moduleId: 'app/VehCar/basMgt/VehDriveWayCarList' },
                { route: 'VehCar/OutWarehouseMgt/VehCertificationMailList', title: '合格证邮寄管理', moduleId: 'app/VehCar/OutWarehouseMgt/VehCertificationMailList' },
                { route: 'VehCar/OutWarehouseMgt/VehCertificationMail/:id', title: '合格证邮寄信息', moduleId: 'app/VehCar/OutWarehouseMgt/VehCertificationMail' },
                { route: 'VehCar/OutWarehouseMgt/VehCertificationMailImport', title: '合格证邮寄导入', moduleId: 'app/VehCar/OutWarehouseMgt/VehCertificationMailImport' },
                { route: 'VehCar/OutWarehouseMgt/CertificationConfirm', title: '合格证确认', moduleId: 'app/VehCar/OutWarehouseMgt/CertificationConfirm' },
                { route: 'VehCar/basMgt/VehCarrierSceneRepresentList/:id', title: '驻场代表管理', moduleId: 'app/VehCar/basMgt/VehCarrierSceneRepresentList' },
                { route: 'VehCar/basMgt/VehCarrierSceneRepresent/:id/:carrierId', title: '驻场代表信息', moduleId: 'app/VehCar/basMgt/VehCarrierSceneRepresent' },
                { route: 'VehCar/OutWarehouseMgt/CertificationConfirmList', title: '合格证确认', moduleId: 'app/VehCar/OutWarehouseMgt/CertificationConfirmList' },
                { route: 'VehCar/OutWarehouseMgt/CertificationLabelPrint/:id', title: '合格证标签打印', moduleId: 'app/VehCar/OutWarehouseMgt/CertificationLabelPrint' },
                { route: 'vehCar/inventoryMgt/vehCarInventoryList', title: '库存盘点', moduleId: 'app/vehCar/inventoryMgt/vehCarInventoryList' },
                { route: 'vehCar/inventoryMgt/vehCarInventoryRecordList/:id/:code', title: '盘点结果', moduleId: 'app/vehCar/inventoryMgt/vehCarInventoryRecordList' },
                { route: 'vehCar/inventoryMgt/VehCarInventoryCheckCertification/:id', title: '合格证盘点', moduleId: 'app/vehCar/inventoryMgt/VehCarInventoryCheckCertification' },
                { route: 'vehCar/inventoryMgt/vehCarInventory/:id', title: '创建盘点', moduleId: 'app/vehCar/inventoryMgt/vehCarInventory' },
                { route: 'vehCar/inventoryMgt/vehCarInventoryInputList/:id', title: '盘点录入列表', moduleId: 'app/vehCar/inventoryMgt/vehCarInventoryInputList' },
                { route: 'vehCar/inventoryMgt/vehCarInventoryInput/:id/:warehouseId/:inputId', title: '盘点录入详情', moduleId: 'app/vehCar/inventoryMgt/vehCarInventoryInput' },
                { route: 'vehCar/inventoryMgt/vehCarInventoryReportList', title: '盘点报告分析', moduleId: 'app/vehCar/inventoryMgt/vehCarInventoryReportList' },
                { route: 'vehCar/inventoryMgt/VehStoreLocationRemindRuleList', title: '库存提醒规则列表', moduleId: 'app/vehCar/inventoryMgt/VehStoreLocationRemindRuleList' },
                { route: 'vehCar/inventoryMgt/VehStoreLocationRemindRule/:id', title: '库存提醒规则详情', moduleId: 'app/vehCar/inventoryMgt/VehStoreLocationRemindRule' },
                { route: 'vehCar/inventoryMgt/VehStoreLocationAgeList', title: '库龄分析', moduleId: 'app/vehCar/inventoryMgt/VehStoreLocationAgeList' },
                { route: 'vehCar/inventoryMgt/VehStoreLocationQueryList', title: '库存查询', moduleId: 'app/vehCar/inventoryMgt/VehStoreLocationQueryList' },
                { route: 'vehCar/basMgt/VehDealerBalance', title: '整车经销商资金查询', moduleId: 'app/vehCar/basMgt/VehDealerBalance' },
                { route: 'VehCar/basMgt/VehShipmentLineCarrierList', title: '线路承运商管理', moduleId: 'app/VehCar/basMgt/VehShipmentLineCarrierList' },
                { route: 'VehCar/basMgt/VehShipmentLineCarrier/:id', title: '线路承运商信息', moduleId: 'app/VehCar/basMgt/VehShipmentLineCarrier' },
                { route: 'VehCar/basMgt/MdmDealerAcceptingBankInfoList', title: '银行监管员管理', moduleId: 'app/VehCar/basMgt/MdmDealerAcceptingBankInfoList' },
                { route: 'VehCar/basMgt/MdmDealerAcceptingBankInfo/:id', title: '银行监管员信息', moduleId: 'app/VehCar/basMgt/MdmDealerAcceptingBankInfo' },
                { route: 'VehCar/basMgt/MdmDealerAcceptingBankInfoImport', title: '银行监管员导入', moduleId: 'app/VehCar/basMgt/MdmDealerAcceptingBankInfoImport' },
                /****************************************************整车-结束*******************************************/
                /****************************************************零件中心-开始*******************************************/
                { route: 'spmMgt/SpmCompanyList', title: '零件公司管理', moduleId: 'app/spmMgt/SpmCompanyList' },
                { route: 'spmMgt/SpmCompany/:id', title: '公司信息', moduleId: 'app/spmMgt/SpmCompany' },
                { route: 'spmMgt/SpmCompanyImport', title: '导入公司信息', moduleId: 'app/spmMgt/SpmCompanyImport' },
                { route: 'spmMgt/SpmWarehouseList', title: '零件仓库维护', moduleId: 'app/spmMgt/SpmWarehouseList' },
                { route: 'spmMgt/SpmWarehouse/:id', title: '仓库信息', moduleId: 'app/spmMgt/SpmWarehouse' },
                { route: 'spmMgt/SpmWarehouseImport', title: '导入仓库信息', moduleId: 'app/spmMgt/SpmWarehouseImport' },
                { route: 'spmMgt/SpmZoneList', title: '零件存储区维护', moduleId: 'app/spmMgt/SpmZoneList' },
                { route: 'spmMgt/SpmZone/:id', title: '存储区信息', moduleId: 'app/spmMgt/SpmZone' },
                { route: 'spmMgt/SpmZoneImport', title: '导入存储区信息', moduleId: 'app/spmMgt/SpmZoneImport' },
                { route: 'spmMgt/SpmLocationList', title: '零件库位维护', moduleId: 'app/spmMgt/SpmLocationList' },
                { route: 'spmMgt/SpmLocation/:id', title: '库位信息', moduleId: 'app/spmMgt/SpmLocation' },
                { route: 'spmMgt/SpmLocationStorageTypeList', title: '翻包台存储类型管理', moduleId: 'app/spmMgt/SpmLocationStorageTypeList' },
                { route: 'spmMgt/SpmLocationStorageType/:id', title: '翻包台存储类型', moduleId: 'app/spmMgt/SpmLocationStorageType' },
                { route: 'spmMgt/SpmLocationImport', title: '导入库位信息', moduleId: 'app/spmMgt/SpmLocationImport' },
                { route: 'spmMgt/SpmStocksList', title: '零件库存查询', moduleId: 'app/spmMgt/SpmStocksList' },
                { route: 'spmMgt/SpmTransHeadList', title: '零件库存调整', moduleId: 'app/spmMgt/SpmTransHeadList' },
                { route: 'spmMgt/SpmTransHead/:id', title: '库存调整单', moduleId: 'app/spmMgt/SpmTransHead' },
                { route: 'spmMgt/SpmTransDetailList/:id', title: '库存调整单明细', moduleId: 'app/spmMgt/SpmTransDetailList' },
                { route: 'spmMgt/SpmStocksWarnList', title: '零件库存预警', moduleId: 'app/spmMgt/SpmStocksWarnList' },
                { route: 'spmMgt/SpmTrayList', title: '零件托标签管理', moduleId: 'app/spmMgt/SpmTrayList' },
                { route: 'spmMgt/SpmTray/:id', title: '托标签信息', moduleId: 'app/spmMgt/SpmTray' },
                { route: 'spmMgt/SpmTrayPrint/:id', title: '托标签打印', moduleId: 'app/spmMgt/SpmTrayPrint' },
                { route: 'spmMgt/SpmNotificationHeadList', title: '零件盘点通知单', moduleId: 'app/spmMgt/SpmNotificationHeadList' },
                { route: 'spmMgt/SpmNotificationHead/:id', title: '盘点通知单信息', moduleId: 'app/spmMgt/SpmNotificationHead' },
                { route: 'spmMgt/SpmNotificationDetailList/:id', title: '盘点通知单明细', moduleId: 'app/spmMgt/SpmNotificationDetailList' },

                { route: 'spmMgt/SpmNotificationResultList/:id', title: '零件盘点结果录入', moduleId: 'app/spmMgt/SpmNotificationResultList' },
                { route: 'spmMgt/SpmNotificationResult/:id', title: '盘点录入', moduleId: 'app/spmMgt/SpmNotificationResult' },
                { route: 'spmMgt/SpmCountAnalysisList(/:id)', title: '零件盘点差异分析', moduleId: 'app/spmMgt/SpmCountAnalysisList' },
                { route: 'spmMgt/SpmCountAnalysis/:id', title: '盘点差异分析', moduleId: 'app/spmMgt/SpmCountAnalysis' },
                { route: 'spmMgt/Part/SpmCycleNotificationList', title: '循环盘点任务', moduleId: 'app/spmMgt/Part/SpmCycleNotificationList' },
                { route: 'spmMgt/Part/SpmCycleNotification/:id', title: '循环盘点', moduleId: 'app/spmMgt/Part/SpmCycleNotification' },
                { route: 'spmMgt/Part/ProfitALossList', title: '盘盈盘亏列表', moduleId: 'app/spmMgt/Part/ProfitALossList' },
                { route: 'spmMgt/Part/ProfitALoss/:id', title: '盘盈盘亏', moduleId: 'app/spmMgt/Part/ProfitALoss' },
                { route: 'spmMgt/Part/ProfitALossDetail/:id', title: '盘盈盘亏明细', moduleId: 'app/spmMgt/Part/ProfitALossDetail' },
                { route: 'spmMgt/Part/SpmComplaintNotification', title: '投诉盘点', moduleId: 'app/spmMgt/Part/SpmComplaintNotification' },
                { route: 'spmMgt/Part/SpmYearNotification', title: '年度盘点', moduleId: 'app/spmMgt/Part/SpmYearNotification' },
                { route: 'spmMgt/SpmPartsGroupProfitList', title: '零件利润率管理', moduleId: 'app/spmMgt/SpmPartsGroupProfitList' },
                { route: 'spmMgt/SpmPartsGroupProfit/:id', title: '零件利润率信息维护', moduleId: 'app/spmMgt/SpmPartsGroupProfit' },
                { route: 'spmMgt/SpmPartsGroupProfitModulusList', title: '零件折扣系数管理', moduleId: 'app/spmMgt/SpmPartsGroupProfitModulusList' },
                { route: 'spmMgt/SpmPartsGroupProfitModulus/:id', title: '零件折扣系数信息维护', moduleId: 'app/spmMgt/SpmPartsGroupProfitModulus' },
                { route: 'spmMgt/SpmPartsAppModelsConfigList', title: '零件适用车型系数管理', moduleId: 'app/spmMgt/SpmPartsAppModelsConfigList' },
                { route: 'spmMgt/SpmPartsAppModelsConfig/:id', title: '零件适用车型系数维护', moduleId: 'app/spmMgt/SpmPartsAppModelsConfig' },
                { route: 'spmMgt/SpmPurchAsepropertyConfigList', title: '零件采购类型系数配置', moduleId: 'app/spmMgt/SpmPurchAsepropertyConfigList' },
                { route: 'spmMgt/SpmRushOrderSetList(/:status)', title: '紧急订单配置', moduleId: 'app/spmMgt/SpmRushOrderSetList' },
                { route: 'spmMgt/SpmRushOrderSet/:id', title: '紧急订单', moduleId: 'app/spmMgt/SpmRushOrderSet' },
                { route: 'spmMgt/SpmRushOrderSetDetail/:id', title: '紧急订单明细', moduleId: 'app/spmMgt/SpmRushOrderSetDetail' },
                { route: 'spmMgt/SpmPromotionalPricingList', title: '促销价格维护', moduleId: 'app/spmMgt/SpmPromotionalPricingList' },
                { route: 'spmMgt/SpmPromotionalPricing/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionalPricing' },

                { route: 'spmMgt/SpmPromotionsCostCust/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionsCostCust' },

                { route: 'spmMgt/Part/PartList', title: '零件查询', moduleId: 'app/spmMgt/Part/PartList' },
                { route: 'spmMgt/Part/SpmPartStockConfigList', title: '零件其他信息维护', moduleId: 'app/spmMgt/Part/SpmPartStockConfigList' },
                { route: 'spmMgt/Part/SpmPartStockConfigImport', title: '零件其他信息导入', moduleId: 'app/spmMgt/Part/SpmPartStockConfigImport' },
                { route: 'spmMgt/Part/SpmPartStockConfig/:id', title: '零件其他信息', moduleId: 'app/spmMgt/Part/SpmPartStockConfig' },
                { route: 'spmMgt/Part/SpmPartConfig/:id', title: '未维护零件', moduleId: 'app/spmMgt/Part/SpmPartConfig' },
                { route: 'spmMgt/Part/SpmRepackagePrintConfigList', title: '翻包台打印机配置', moduleId: 'app/spmMgt/Part/SpmRepackagePrintConfigList' },
                { route: 'spmMgt/Part/SpmRepackagePrintConfig/:id', title: '翻包台打印机配置编辑', moduleId: 'app/spmMgt/Part/SpmRepackagePrintConfig' },
                { route: 'spmMgt/Part/MdmConfigList', title: '备件参数信息配置', moduleId: 'app/spmMgt/Part/MdmConfigList' },
                { route: 'spmMgt/Part/MdmConfig/:id', title: '备件参数信息配置', moduleId: 'app/spmMgt/Part/MdmConfig' },
                { route: 'spmMgt/Part/SpmClaimList', title: '备件索赔', moduleId: 'app/spmMgt/Part/SpmClaimList' },
                { route: 'spmMgt/Part/SpmClaim/:id', title: '备件索赔', moduleId: 'app/spmMgt/Part/SpmClaim' },
                { route: 'spmMgt/Part/SpmClaimDetail/:id', title: '备件索赔', moduleId: 'app/spmMgt/Part/SpmClaimDetail' },
                { route: 'spmMgt/Part/SpmClaimList', title: '零件主数据查询', moduleId: 'app/spmMgt/Part/SpmClaimDetail' },
                /****************************************************零件中心-结束*******************************************/
                /***************************************************保修**********************************************************/
                { route: 'spmMgt/SpmPromotionsCostDealer/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionsCostDealer' },
                { route: 'spmMgt/SpmCustomerGroupList', title: '客户群组基础信息管理', moduleId: 'app/spmMgt/SpmCustomerGroupList' },
                { route: 'spmMgt/SpmCustomerGroup/:id', title: '客户群组基础信息维护', moduleId: 'app/spmMgt/SpmCustomerGroup' },
                { route: 'spmMgt/SpmCustomerGroupDealerList', title: '客户群组管理', moduleId: 'app/spmMgt/SpmCustomerGroupDealerList' },
                { route: 'spmMgt/SpmCustomerGroupDealer/:id', title: '客户群组信息维护', moduleId: 'app/spmMgt/SpmCustomerGroupDealer' },
                { route: 'spmMgt/SpmPromotionsCostPart/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionsCostPart' },
                { route: 'spmMgt/SpmPromotionsCostPartCust/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionsCostPartCust' },
                { route: 'spmMgt/SpmPartsGroupProfitExtend', title: '价格模拟确认', moduleId: 'app/spmMgt/SpmPartsGroupProfitExtend' },
                { route: 'spmMgt/spmPartsPriceSearch', title: '零件价格查询', moduleId: 'app/spmMgt/spmPartsPriceSearch' },
                { route: 'spmMgt/MdmSupplierInfoList', title: '供应商管理', moduleId: 'app/spmMgt/MdmSupplierInfoList' },
                { route: 'spmMgt/MdmSupplierInfo/:id', title: '供应商信息维护', moduleId: 'app/spmMgt/MdmSupplierInfo' },
                { route: 'spmMgt/MdmSupplierContactImport', title: '供应商导入', moduleId: 'app/spmMgt/MdmSupplierContactImport' },

                { route: 'spmMgt/SpmPromotionsCostPartCustDetail/:id', title: '促销价格-按零件客户群明细', moduleId: 'app/spmMgt/SpmPromotionsCostPartCustDetail' },
                { route: 'spmMgt/SpmPrsCostPartCustDetail/:id/:PartNo', title: '促销价格-按零件客户群明细', moduleId: 'app/spmMgt/SpmPrsCostPartCustDetail' },
                { route: 'spmMgt/SpmPromotionsCostPartDealerDetail/:id', title: '促销价格-按经销商客户群明细', moduleId: 'app/spmMgt/SpmPromotionsCostPartDealerDetail' },
                { route: 'spmMgt/SpmPrsCostPartDealerDetail/:id/:PartNo', title: '促销价格-按经销商客户群明细', moduleId: 'app/spmMgt/SpmPrsCostPartDealerDetail' },
                { route: 'spmMgt/SpmPromotionsCostPartDealer/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionsCostPartDealer' },
                { route: 'spmMgt/SpmPrsCostPartDealer/:id/:CustGroup', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPrsCostPartDealer' },
                { route: 'spmMgt/SpmPromotionsCostDealerDetail/:id', title: '促销价格信息维护', moduleId: 'app/spmMgt/SpmPromotionsCostDealerDetail' },
                /***************************************************索赔管理--开始**********************************************************/
                { route: 'clmMgt/Host/ClmWarranty/:id', title: '主机厂保修明细', moduleId: 'app/clmMgt/Host/ClmWarranty' },
                { route: 'clmMgt/Host/ClmWarrantyList', title: '主机厂常规保修管理', moduleId: 'app/clmMgt/Host/ClmWarrantyList' },
                { route: 'clmMgt/Host/ClmWarrantyPrint/:ids/:type', title: ' ', moduleId: 'app/clmMgt/Host/ClmWarrantyPrint' },
                { route: 'clmMgt/Host/ClmPreLicensingList', title: '主机厂预授权管理', moduleId: 'app/clmMgt/Host/ClmPreLicensingList' },
                { route: 'clmMgt/Host/ClmPreLicensing/:id', title: '主机厂预授权详细', moduleId: 'app/clmMgt/Host/ClmPreLicensing' },
                { route: 'clmMgt/Host/ClmNonWarrantyList', title: '主机厂非保修案例列表', moduleId: 'app/clmMgt/Host/ClmNonWarrantyList' },
                { route: 'clmMgt/Host/ClmNonWarranty/:id', title: '主机厂非保修案例明细', moduleId: 'app/clmMgt/Host/ClmNonWarranty' },
                { route: 'clmMgt/Host/ClmPayToDealerList', title: '主机厂付款申请单列表', moduleId: 'app/clmMgt/Host/ClmPayToDealerList' },
                { route: 'clmMgt/Host/ClmPayToDealer/:id', title: '主机厂付款清单明细', moduleId: 'app/clmMgt/Host/ClmPayToDealer' },
                { route: 'clmMgt/Host/ClmPayApplicationFormGenerateSettingList', title: '付款申请单生成设置列表', moduleId: 'app/clmMgt/Host/ClmPayApplicationFormGenerateSettingList' },
                { route: 'clmMgt/Host/ClmPayApplicationFormGenerateSetting/:id', title: '付款申请单生成设置信息', moduleId: 'app/clmMgt/Host/ClmPayApplicationFormGenerateSetting' },
                { route: 'clmMgt/Host/ClmPayToDealerHistory/:id', title: '经销商付款清单明细历史', moduleId: 'app/clmMgt/Host/ClmPayToDealerHistory' },
                { route: 'clmMgt/Host/ClmInvoiceNoticeList', title: '主机厂开票通知列表', moduleId: 'app/clmMgt/Host/ClmInvoiceNoticeList' },
                { route: 'clmMgt/Host/ClmInvoiceNotice/:id', title: '主机厂开票通知明细', moduleId: 'app/clmMgt/Host/ClmInvoiceNotice' },
                { route: 'clmMgt/Host/ClmUnlockWarrantyList', title: '经销商解锁', moduleId: 'app/clmMgt/Host/ClmUnlockWarrantyList' },

                { route: 'clmMgt/Host/ClmSupplierRecoveryList', title: '主机厂供应商索赔管理', moduleId: 'app/clmMgt/Host/ClmSupplierRecoveryList' },
                { route: 'clmMgt/Host/ClmSupplierRecoveryListImport', title: '主机厂供应商索赔导入', moduleId: 'app/clmMgt/Host/ClmSupplierRecoveryListImport' },
                { route: 'clmMgt/Host/ClmSupplierRecovery/:id', title: '主机厂供应商索赔详情', moduleId: 'app/clmMgt/Host/ClmSupplierRecovery' },
                { route: 'clmMgt/Host/ClmRecoverySetupList', title: '主机厂供应商索赔比例配置', moduleId: 'app/clmMgt/Host/ClmRecoverySetupList' },
                { route: 'clmMgt/Host/ClmRecoverySetup/:id', title: '主机厂供应商索赔比例配置详情', moduleId: 'app/clmMgt/Host/ClmRecoverySetup' },
                { route: 'clmMgt/Host/ClmRecoverySetupDetail/:id', title: '主机厂供应商索赔比例配置详情', moduleId: 'app/clmMgt/Host/ClmRecoverySetupDetail' },
                { route: 'clmMgt/Host/ClmRecoverySetupImport', title: '主机厂供应商索赔比例导入', moduleId: 'app/clmMgt/Host/ClmRecoverySetupImport' },
                { route: 'clmMgt/Host/ClmPartSerialNumberList', title: '零件追溯', moduleId: 'app/clmMgt/Host/ClmPartSerialNumberList' },
                { route: 'clmMgt/Host/ClmPartSerialNumber/:id', title: '零件追溯详情', moduleId: 'app/clmMgt/Host/ClmPartSerialNumber' },
                { route: 'clmMgt/Host/ClmPartSerialNumberImport', title: '零件追溯导入', moduleId: 'app/clmMgt/Host/ClmPartSerialNumberImport' },

                /**三包配置开始**/
                { route: 'clmMgt/Host/ClmThreeGuaranteesConfigList', title: '主机厂三包规则列表', moduleId: 'app/clmMgt/Host/ClmThreeGuaranteesConfigList' },
                { route: 'clmMgt/Host/ClmThreeGuaranteesConfig/:id', title: '主机厂三包规则详情', moduleId: 'app/clmMgt/Host/ClmThreeGuaranteesConfig' },
                { route: 'clmMgt/Host/ClmThreeGuaranteePartsList/:id', title: '三包零件列表', moduleId: 'app/clmMgt/Host/ClmThreeGuaranteePartsList' },
                /**三包配置结束**/
                /**服务活动开始**/
                { route: 'clmMgt/Host/ClmCampaignList', title: '主机厂服务活动', moduleId: 'app/clmMgt/Host/ClmCampaignList' },
                { route: 'clmMgt/Host/ClmCampaign/:id', title: '主机厂服务新建或修改', moduleId: 'app/clmMgt/Host/ClmCampaign' },
                { route: 'clmMgt/Host/ClmCampaignPackage/:id', title: '服务活动维修包', moduleId: 'app/clmMgt/Host/ClmCampaignPackage' },
                { route: 'clmMgt/Host/ClmCampaignBill/:id', title: '主机厂服务活动清单', moduleId: 'app/clmMgt/Host/ClmCampaignBill' },
                { route: 'clmMgt/Host/ClmCampaignVINBill/:id', title: '主机厂服务活动VIN清单', moduleId: 'app/clmMgt/Host/ClmCampaignVINBill' },
                { route: 'clmMgt/Dealer/ClmCampaignList', title: '经销商服务活动管理', moduleId: 'app/clmMgt/Dealer/ClmCampaignList' },
                { route: 'clmMgt/Dealer/ClmCampaignBill/:id', title: '经销商服务活动明细', moduleId: 'app/clmMgt/Dealer/ClmCampaignBill' },
                /**服务活动结束**/
                /**零件返回开始**/
                { route: 'clmMgt/Host/ClmReceivingInfoList', title: '主机厂收货地址信息列表', moduleId: 'app/clmMgt/Host/ClmReceivingInfoList' },
                { route: 'clmMgt/Host/ClmReceivingInfo/:id', title: '主机厂收货地址信息详情', moduleId: 'app/clmMgt/Host/ClmReceivingInfo' },
                { route: 'clmMgt/Host/ClmReceivingInfoDetail/:id', title: '主机厂收货地址信息详情', moduleId: 'app/clmMgt/Host/ClmReceivingInfoDetail' },
                { route: 'clmMgt/Host/ClmDealerReturnList', title: '主机厂经销商返件设置列表', moduleId: 'app/clmMgt/Host/ClmDealerReturnList' },
                { route: 'clmMgt/Host/ClmDealerReturn/:id', title: '主机厂经销商返件设置详情', moduleId: 'app/clmMgt/Host/ClmDealerReturn' },
                { route: 'clmMgt/Host/ClmDealerReturnDetail/:id', title: '主机厂经销商返件设置详情', moduleId: 'app/clmMgt/Host/ClmDealerReturnDetail' },
                { route: 'clmMgt/Host/ClmPartsReturnBillList', title: '主机厂零件返回清单列表', moduleId: 'app/clmMgt/Host/ClmPartsReturnBillList' },
                { route: 'clmMgt/Host/ClmPartsReturnBill/:id', title: '主机厂零件返回清单详情', moduleId: 'app/clmMgt/Host/ClmPartsReturnBill' },
                { route: 'clmMgt/Host/ClmPartsReturnBillDetail/:id', title: '主机厂零件返回清单详情', moduleId: 'app/clmMgt/Host/ClmPartsReturnBillDetail' },

                { route: 'clmMgt/Host/ClmDealerReturnImport', title: '经销商返件配置导入', moduleId: 'app/clmMgt/Host/ClmDealerReturnImport' },
                { route: 'clmMgt/Host/ClmPartsReturnBillImport', title: '主机厂零件返回清单导入', moduleId: 'app/clmMgt/Host/ClmPartsReturnBillImport' },

                { route: 'clmMgt/Host/ClmPartReturnList', title: '主机厂零件返回管理', moduleId: 'app/clmMgt/Host/ClmPartReturnList' },
                { route: 'clmMgt/Host/ClmPartReturnNotify/:id', title: '主机厂零件返回通知', moduleId: 'app/clmMgt/Host/ClmPartReturnNotify' },
                { route: 'clmMgt/Host/ClmPartScrapList', title: '主机厂零件销毁管理', moduleId: 'app/clmMgt/Host/ClmPartScrapList' },
                { route: 'clmMgt/Host/ClmPartScrap/:id', title: '主机厂零件销毁单', moduleId: 'app/clmMgt/Host/ClmPartScrap' },
                { route: 'clmMgt/Host/ClmPartOutboundList', title: '主机厂零件出库管理', moduleId: 'app/clmMgt/Host/ClmPartOutboundList' },
                { route: 'clmMgt/Host/ClmPartOutbound/:id', title: '主机厂零件出库单', moduleId: 'app/clmMgt/Host/ClmPartOutbound' },
                { route: 'clmMgt/Host/ClmOutboundDetail/:id', title: '主机厂零件出库单详情', moduleId: 'app/clmMgt/Host/ClmOutboundDetail' },
                { route: 'clmMgt/Host/ClmPartsReturnBatchDetail/:id', title: '经销商零件返回批次详情', moduleId: 'app/clmMgt/Host/ClmPartsReturnBatchDetail' },
                { route: 'clmMgt/Host/ClmPartsReturnBatchIncome/:id', title: '零件收货', moduleId: 'app/clmMgt/Host/ClmPartsReturnBatchIncome' },
                { route: 'clmMgt/Host/ClmPartsScrapDetail/:id', title: '经销商零件销毁单详情', moduleId: 'app/clmMgt/Host/ClmPartsScrapDetail' },
                { route: 'clmMgt/Host/ClmPartsScrapPrint/:id', title: '主机厂零件销毁打印', moduleId: 'app/clmMgt/Host/ClmPartsScrapPrint' },
                { route: 'clmMgt/Host/ClmPartsReturnExcDebitList', title: '主机厂异常扣款', moduleId: 'app/clmMgt/Host/ClmPartsReturnExcDebitList' },
                /**零件返回结束**/
                /**保修政策开始**/
                { route: 'clmMgt/Host/DisplacedPartsList', title: '保修旧件综合查询', moduleId: 'app/clmMgt/Host/ClmDisplacedPartsList' },
                { route: 'clmMgt/Host/ClmWarrantyPolicyList', title: '保修政策列表', moduleId: 'app/clmMgt/Host/ClmWarrantyPolicyList' },
                { route: 'clmMgt/Host/ClmSelfAuthorizationList', title: '善意保修自授权管理', moduleId: 'app/clmMgt/Host/ClmSelfAuthorizationList' },
                { route: 'clmMgt/Host/ClmSelfAuthorization/:id', title: '善意保修自授权详情', moduleId: 'app/clmMgt/Host/ClmSelfAuthorization' },
                { route: 'clmMgt/Host/ClmSelfAuthorizationGroupDetail/:id', title: '善意保修自授权详情', moduleId: 'app/clmMgt/Host/ClmSelfAuthorizationGroupDetail' },
                { route: 'clmMgt/Host/ClmSelfAuthorizationDetail/:id', title: '善意保修自授权详情', moduleId: 'app/clmMgt/Host/ClmSelfAuthorizationDetail' },
                { route: 'clmMgt/Host/ClmSelfAuthorizationImport', title: '善意保修自授权详情', moduleId: 'app/clmMgt/Host/ClmSelfAuthorizationImport' },

                { route: 'clmMgt/Host/ClmWarrantyManHourPriceSettingList', title: '保修工时单价设置', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceSettingList' },
                { route: 'clmMgt/Host/ClmWarrantyManHourPriceSetting/:id', title: '保修工时单价设置信息', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceSetting' },
                { route: 'clmMgt/Host/ClmWarrantyManHourPriceSettingGroupDetail/:id', title: '保修工时单价设置详情', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceSettingGroupDetail' },
                { route: 'clmMgt/Host/ClmWarrantyManHourPriceSettingDetail/:id', title: '保修工时单价设置详情', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceSettingDetail' },
                { route: 'clmMgt/Host/ClmWarrantyManHourPriceSettingImport', title: '保修工时单价设置导入', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceSettingImport' },

                { route: 'clmMgt/Host/ClmWarrantyManHourPriceGroupList', title: '保修工时单价组', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceGroupList' },
                { route: 'clmMgt/Host/ClmWarrantyManHourPriceGroup/:id', title: '保修工时单价组信息', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPriceGroup' },
                { route: 'clmMgt/Host/ClmWarrantyManHourPrice/:id', title: '保修工时单价配置', moduleId: 'app/clmMgt/Host/ClmWarrantyManHourPrice' },

                { route: 'clmMgt/Host/ClmWarrantyPartsPolicyList', title: '保修零件政策管理', moduleId: 'app/clmMgt/Host/ClmWarrantyPartsPolicyList' },
                { route: 'clmMgt/Host/ClmWarrantyPartsPolicy/:id', title: '保修零件政策信息', moduleId: 'app/clmMgt/Host/ClmWarrantyPartsPolicy' },
                { route: 'clmMgt/Host/ClmWarrantyPartsPolicyDetail/:id', title: '保修零件政策详情', moduleId: 'app/clmMgt/Host/ClmWarrantyPartsPolicyDetail' },
                { route: 'clmMgt/Host/ClmWarrantyPartsPolicyImport', title: '保修零件政策导入', moduleId: 'app/clmMgt/Host/ClmWarrantyPartsPolicyImport' },

                { route: 'clmMgt/Host/ClmWarrantyPeriodSettingList', title: '保修期设置', moduleId: 'app/clmMgt/Host/ClmWarrantyPeriodSettingList' },
                { route: 'clmMgt/Host/ClmWarrantyPeriodSetting/:id', title: '保修期设置信息', moduleId: 'app/clmMgt/Host/ClmWarrantyPeriodSetting' },
                { route: 'clmMgt/Host/ClmWarrantyPeriodSettingDetail/:id', title: '保修期设置详情', moduleId: 'app/clmMgt/Host/ClmWarrantyPeriodSettingDetail' },
                { route: 'clmMgt/Host/ClmWarrantyPeriodSettingImport', title: '保修期设置详情', moduleId: 'app/clmMgt/Host/ClmWarrantyPeriodSettingImport' },

                { route: 'clmMgt/Host/ClmWarrantyExtensionList', title: '延保设置', moduleId: 'app/clmMgt/Host/ClmWarrantyExtensionList' },
                { route: 'clmMgt/Host/ClmWarrantyExtension/:id', title: '延保设置信息', moduleId: 'app/clmMgt/Host/ClmWarrantyExtension' },
                { route: 'clmMgt/Host/ClmWarrantyExtensionDetail/:id', title: '延保设置详情', moduleId: 'app/clmMgt/Host/ClmWarrantyExtensionDetail' },
                { route: 'clmMgt/Host/ClmWarrantyExtensionConfigurationImport', title: '延保设置导入', moduleId: 'app/clmMgt/Host/ClmWarrantyExtensionConfigurationImport' },


                { route: 'clmMgt/Host/ClmWearTearPartsList', title: '特殊零件保修期设置', moduleId: 'app/clmMgt/Host/ClmWearTearPartsList' },
                { route: 'clmMgt/Host/ClmWearTearParts/:id', title: '特殊零件保修期设置信息', moduleId: 'app/clmMgt/Host/ClmWearTearParts' },
                { route: 'clmMgt/Host/ClmWearTearPartDetail/:id', title: '特殊零件保修期详情', moduleId: 'app/clmMgt/Host/ClmWearTearPartDetail' },
                { route: 'clmMgt/Host/ClmWearTearPartImport', title: '特殊零件保修期导入', moduleId: 'app/clmMgt/Host/ClmWearTearPartImport' },

                { route: 'clmMgt/Host/ClmPartsHandlingChargeList', title: '零件处理费设置管理', moduleId: 'app/clmMgt/Host/ClmPartsHandlingChargeList' },
                { route: 'clmMgt/Host/ClmPartsHandlingCharge/:id', title: '零件处理费设置信息', moduleId: 'app/clmMgt/Host/ClmPartsHandlingCharge' },
                { route: 'clmMgt/Host/ClmPartsHandlingChargeDetail/:id', title: '零件处理费设置详情', moduleId: 'app/clmMgt/Host/ClmPartsHandlingChargeDetail' },
                { route: 'clmMgt/Host/ClmPartsHandlingChargeImport', title: '零件处理费设置导入', moduleId: 'app/clmMgt/Host/ClmPartsHandlingChargeImport' },
                { route: 'clmMgt/Host/ClmPreAuthorizationSettingList', title: '预授权设置', moduleId: 'app/clmMgt/Host/ClmPreAuthorizationSettingList' },
                { route: 'clmMgt/Host/ClmPartSetting/:id', title: '预授权零件信息', moduleId: 'app/clmMgt/Host/ClmPartSetting' },
                { route: 'clmMgt/Host/ClmPartSettingDetail/:id', title: '预授权零件详情', moduleId: 'app/clmMgt/Host/ClmPartSettingDetail' },
                { route: 'clmMgt/Host/ClmPartSettingImport', title: '预授权零件导入', moduleId: 'app/clmMgt/Host/ClmPartSettingImport' },

                { route: 'clmMgt/Host/ClmPriceSetting/:id', title: '预授权价格信息', moduleId: 'app/clmMgt/Host/ClmPriceSetting' },
                { route: 'clmMgt/Host/ClmPriceSettingDetail/:id', title: '预授权价格详情', moduleId: 'app/clmMgt/Host/ClmPriceSettingDetail' },
                { route: 'clmMgt/Host/ClmPreAuthorizationPriceSettingImport', title: '预授权价格设置导入', moduleId: 'app/clmMgt/Host/ClmPreAuthorizationPriceSettingImport' },

                { route: 'clmMgt/Host/ClmSpecialWarrantyPeriodSettingList', title: '特殊保修期设置管理', moduleId: 'app/clmMgt/Host/ClmSpecialWarrantyPeriodSettingList' },
                { route: 'clmMgt/Host/ClmSpecialWarrantyPeriodSetting/:id', title: '特殊保修期设置信息', moduleId: 'app/clmMgt/Host/ClmSpecialWarrantyPeriodSetting' },
                { route: 'clmMgt/Host/ClmSpecialWarrantyPeriodSettingDetail/:id', title: '特殊保修期设置信息', moduleId: 'app/clmMgt/Host/ClmSpecialWarrantyPeriodSettingDetail' },
                { route: 'clmMgt/Host/ClmSpecialWarrantyPeriodSettingImport', title: '特殊保修期导入', moduleId: 'app/clmMgt/Host/ClmSpecialWarrantyPeriodSettingImport' },

                //政策
                { route: 'clmMgt/Host/ClmWarrantyLimitationList', title: '保修受限车辆清单', moduleId: 'app/clmMgt/Host/ClmWarrantyLimitationList' },

                { route: 'clmMgt/Host/ClmSpecialVehicleSettingList', title: '保修受限车辆', moduleId: 'app/clmMgt/Host/ClmSpecialVehicleSettingList' },
                { route: 'clmMgt/Host/ClmSpecialVehicleSetting/:id', title: '保修受限车辆信息', moduleId: 'app/clmMgt/Host/ClmSpecialVehicleSetting' },
                { route: 'clmMgt/Host/ClmSpecialVehicleSettingDetail/:id', title: '保修受限车辆信息', moduleId: 'app/clmMgt/Host/ClmSpecialVehicleSettingDetail' },

                { route: 'clmMgt/Host/ClmAuxiliaryBillList', title: '辅料清单管理', moduleId: 'app/clmMgt/Host/ClmAuxiliaryBillList' },
                { route: 'clmMgt/Host/ClmAuxiliaryBill/:id', title: '辅料清单', moduleId: 'app/clmMgt/Host/ClmAuxiliaryBill' },
                { route: 'clmMgt/Host/ClmAuxiliaryBillDetail/:id', title: '辅料清单', moduleId: 'app/clmMgt/Host/ClmAuxiliaryBillDetail' },
                { route: 'clmMgt/Host/ClmAuxiliaryBillImport', title: '辅料清单', moduleId: 'app/clmMgt/Host/ClmAuxiliaryBillImport' },
                /**保修政策结束**/

                /**保修审计开始**/
                { route: 'clmMgt/Host/ClmAuditList', title: '保修审计列表', moduleId: 'app/clmMgt/Host/ClmAuditList' },
                { route: 'clmMgt/Host/ClmAuditPlan/:id/:dealerId/:type', title: '创建审计计划', moduleId: 'app/clmMgt/Host/ClmAuditPlan' },
                { route: 'clmMgt/Host/ClmAuditAddWarranty/:id', title: '添加保修清单', moduleId: 'app/clmMgt/Host/ClmAuditAddWarranty' },
                { route: 'clmMgt/Host/ClmAuditSingleWarranty/:warrantyNo/:type/:pid', title: '审计单个保修单', moduleId: 'app/clmMgt/Host/ClmAuditSingleWarranty' },
                { route: 'clmMgt/Host/ClmAuditRule/:id', title: '保修审计规则', moduleId: 'app/clmMgt/Host/ClmAuditRule' },
                /**保修审计结束**/
                { route: 'clmMgt/Dealer/ClmWarranty/:id', title: '经销商保修明细', moduleId: 'app/clmMgt/Dealer/ClmWarranty' },
                { route: 'clmMgt/Dealer/ClmWarrantyList', title: '经销商常规保修管理', moduleId: 'app/clmMgt/Dealer/ClmWarrantyList' },
                { route: 'clmMgt/Dealer/ClmWarrantyPrint', title: '经销商保修打印', moduleId: 'app/clmMgt/Dealer/ClmWarrantyPrint' },
                { route: 'clmMgt/Dealer/ClmPreLicensingList', title: '经销商预授权管理', moduleId: 'app/clmMgt/Dealer/ClmPreLicensingList' },
                { route: 'clmMgt/Dealer/ClmPreLicensing/:id', title: '经销商预授权详细', moduleId: 'app/clmMgt/Dealer/ClmPreLicensing' },
                { route: 'clmMgt/Dealer/ClmNonWarrantyList', title: '经销商非保修案例列表', moduleId: 'app/clmMgt/Dealer/ClmNonWarrantyList' },
                { route: 'clmMgt/Dealer/ClmNonWarranty/:id', title: '经销商非保修案例明细', moduleId: 'app/clmMgt/Dealer/ClmNonWarranty' },
                { route: 'clmMgt/Dealer/ClmPayToDealerList', title: '经销商付款申请单列表', moduleId: 'app/clmMgt/Dealer/ClmPayToDealerList' },
                { route: 'clmMgt/Dealer/ClmPayToDealer/:id', title: '经销商付款清单明细', moduleId: 'app/clmMgt/Dealer/ClmPayToDealer' },
                { route: 'clmMgt/Dealer/ClmPayToDealerList', title: '经销商付款申请单列表', moduleId: 'app/clmMgt/Dealer/ClmPayToDealerList' },
                { route: 'clmMgt/Dealer/ClmPayToDealer/:id', title: '经销商付款清单明细', moduleId: 'app/clmMgt/Dealer/ClmPayToDealer' },

                { route: 'clmMgt/Dealer/ClmInvoiceNoticeList', title: '经销商开票通知列表', moduleId: 'app/clmMgt/Dealer/ClmInvoiceNoticeList' },
                { route: 'clmMgt/Dealer/ClmInvoiceNotice/:id', title: '经销商开票通知明细', moduleId: 'app/clmMgt/Dealer/ClmInvoiceNotice' },
                { route: 'clmMgt/Dealer/ClmPartReturnList', title: '经销商零件返回管理', moduleId: 'app/clmMgt/Dealer/ClmPartReturnList' },
                { route: 'clmMgt/Dealer/ClmPartsReturnBatchDetail/:id', title: '经销商零件返回批次详情', moduleId: 'app/clmMgt/Dealer/ClmPartsReturnBatchDetail' },
                { route: 'clmMgt/Dealer/ClmCartonNoPrint/:id', title: '箱号打印', moduleId: 'app/clmMgt/Dealer/ClmCartonNoPrint' },
                { route: 'clmMgt/Dealer/ClmScrapPartList', title: '经销商零件销毁管理', moduleId: 'app/clmMgt/Dealer/ClmScrapPartList' },
                { route: 'clmMgt/Dealer/ClmScrapPart/:id', title: '经销商零件销毁单', moduleId: 'app/clmMgt/Dealer/ClmScrapPart' },

                { route: 'clmMgt/Dealer/ClmInvoiceNotice/:id', title: '经销商开票通知明细', moduleId: 'app/clmMgt/Dealer/ClmInvoiceNotice' },
                { route: 'clmMgt/Dealer/ClmLabelPrint', title: '标签打印', moduleId: 'app/clmMgt/Dealer/ClmLabelPrint' },
                { route: 'clmMgt/Dealer/ClmLabelStyle/:id', title: '标签样式', moduleId: 'app/clmMgt/Dealer/ClmLabelStyle' },

                /*市场活动开始*/
                { route: 'clmMgt/Host/ClmMarketCampaignList', title: '主机厂市场活动列表', moduleId: 'app/clmMgt/Host/ClmMarketCampaignList' },
                { route: 'clmMgt/Host/ClmMarketCampaign/:id', title: '主机厂市场活动详情', moduleId: 'app/clmMgt/Host/ClmMarketCampaign' },
                { route: 'clmMgt/Host/ClmMarketCampaignDetail/:id', title: '主机厂市场活动只读', moduleId: 'app/clmMgt/Host/ClmMarketCampaignDetail' },
                { route: 'clmMgt/Host/ClmMarketCampaignVeh/:id', title: '主机厂市场活动完成车辆', moduleId: 'app/clmMgt/Host/ClmMarketCampaignVeh' },
                { route: 'clmMgt/Dealer/ClmMarketCampaignList', title: '经销商市场活动列表', moduleId: 'app/clmMgt/Dealer/ClmMarketCampaignList' },
                { route: 'clmMgt/Dealer/ClmMarketCampaign/:id', title: '经销商市场活动详情', moduleId: 'app/clmMgt/Dealer/ClmMarketCampaign' },
                { route: 'clmMgt/Dealer/ClmMarketCampaignVeh/:id', title: '经销商市场活动完成车辆', moduleId: 'app/clmMgt/Dealer/ClmMarketCampaignVeh' },


                /*市场活动结束*/

                /***************************************************索赔管理--结束**********************************************************/
                /***************************************************采购管理--开始**********************************************************/
                { route: 'spmPurchaseMgt/SpmPurchaseOrderList', title: '采购订单', moduleId: 'app/spmPurchaseMgt/SpmPurchaseOrderList' },
                { route: 'spmPurchaseMgt/SpmPurchaseOrderDetail/:id', title: '采购订单明细', moduleId: 'app/spmPurchaseMgt/SpmPurchaseOrderDetail' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanList', title: '采购计划', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanList' },
                { route: 'spmPurchaseMgt/SpmPurchasePlan/:id', title: '采购计划信息', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlan' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanDetailAdd/:id', title: '添加采购计划明细', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanDetailAdd' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanDetail/:id', title: '采购计划明细', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanDetail' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanDetails/:id/:PurchaseCode', title: '新增采购计划明细', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanDetails' },
                { route: 'spmMgt/saleOut/SpmOrderCalendarList', title: '订单日历', moduleId: 'app/spmMgt/saleOut/SpmOrderCalendarList' },
                { route: 'spmMgt/saleOut/SpmOrderCalendar/:id', title: '订单日历', moduleId: 'app/spmMgt/saleOut/SpmOrderCalendar' },
                { route: 'spmMgt/saleOut/SpmOrderCalendarImport', title: '导入订单日历', moduleId: 'app/spmMgt/saleOut/SpmOrderCalendarImport' },
                { route: 'spmMgt/saleOut/SpmLimitationLogisticsList', title: '物流时效', moduleId: 'app/spmMgt/saleOut/SpmLimitationLogisticsList' },
                { route: 'spmMgt/saleOut/SpmLimitationLogistics/:id', title: '物流时效信息添加', moduleId: 'app/spmMgt/saleOut/SpmLimitationLogistics' },
                { route: 'spmMgt/saleOut/SpmLimitationLogisticsImport', title: '导入物流时效', moduleId: 'app/spmMgt/saleOut/SpmLimitationLogisticsImport' },

                { route: 'spmPurchaseMgt/SpmAutoPurchasePlan', title: '采购计划预测', moduleId: 'app/spmPurchaseMgt/SpmAutoPurchasePlan' },
                { route: 'spmMgt/MdmPartQuotaNeedRemindList', title: '配额异常查询', moduleId: 'app/spmMgt/MdmPartQuotaNeedRemindList' },
                { route: 'spmMgt/MdmSupplierContractList', title: '零件采购协议管理', moduleId: 'app/spmMgt/MdmSupplierContractList' },
                //配额异常查询时，需要进入的页面
                { route: 'spmMgt/MdmSupplierContractList/:Query/:WmNo/:PartNo', title: '零件采购协议信息维护', moduleId: 'app/spmMgt/MdmSupplierContractList' },
                { route: 'spmMgt/MdmSupplierContract/:id', title: '零件采购协议信息维护', moduleId: 'app/spmMgt/MdmSupplierContract' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanForecastImport', title: '零件采购预测导入', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanForecastImport' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanImport', title: '零件采购计划导入', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanImport' },
                { route: 'spmPurchaseMgt/SpmPurchasePlanAdd/:id', title: '零件采购计划明细', moduleId: 'app/spmPurchaseMgt/SpmPurchasePlanAdd' },
                { route: 'spmMgt/saleOut/SpmOrderCalendarWithWarehouseList', title: '订单处理时间配置', moduleId: 'app/spmMgt/saleOut/SpmOrderCalendarWithWarehouseList' },
                { route: 'spmMgt/saleOut/SpmOrderCalendarWithWarehouse/:id', title: '订单处理时间配置', moduleId: 'app/spmMgt/saleOut/SpmOrderCalendarWithWarehouse' },
                { route: 'spmMgt/saleOut/PurchaseAppList', title: '预订单管理', moduleId: 'app/spmMgt/saleOut/PurchaseAppList' },
                { route: 'spmMgt/saleOut/PurchaseAppItem/:code', title: '预订单详情', moduleId: 'app/spmMgt/saleOut/PurchaseAppItem' },
                { route: 'spmMgt/SupplierQuota/SupplierQuotaList(/:status)', title: '供应商配额', moduleId: 'app/spmMgt/SupplierQuota/SupplierQuotaList' },
                { route: 'spmMgt/SupplierQuota/SupplierQuotaList/:Query/:CompanyNo/:WmNo/:PartNo', title: '供应商配额', moduleId: 'app/spmMgt/SupplierQuota/SupplierQuotaList' },
                { route: 'spmMgt/SupplierQuota/SupplierQuota/:id', title: '供应商配额维护', moduleId: 'app/spmMgt/SupplierQuota/SupplierQuota' },
                /***************************************************采购管理--结束**********************************************************/
                /****************************************************采购入库-开始*******************************************/
                { route: 'spmMgt/SpmReceiveList(/:status)', title: '收货入库', moduleId: 'app/spmMgt/SpmReceiveList' },
                { route: 'spmMgt/SpmReceive/:id(/:recno)', title: '收货入库单信息', moduleId: 'app/spmMgt/SpmReceive' },
                { route: 'spmMgt/SpmReceiveDetailList/:id', title: '收货入库零件明细', moduleId: 'app/spmMgt/SpmReceiveDetailList' },
                { route: 'spmMgt/Part/SpmReceiveRefTray/:id', title: '组托明细', moduleId: 'app/spmMgt/Part/SpmReceiveRefTray' },
                { route: 'spmMgt/SpmReceiveDetailAbnormalList/:id/:wayIn', title: '收货入库异常明细', moduleId: 'app/spmMgt/SpmReceiveDetailAbnormalList' },
                { route: 'spmMgt/SpmTrayPartList(/:status)', title: '物料组托管理', moduleId: 'app/spmMgt/SpmTrayPartList' },
                { route: 'spmMgt/SpmTrayPartAdd(/:receiveno)', title: '收货组托新增', moduleId: 'app/spmMgt/SpmTrayPartAdd' },
                { route: 'spmMgt/SpmTrayPart/:id', title: '物料组托信息', moduleId: 'app/spmMgt/SpmTrayPart' },
                { route: 'spmMgt/SpmTrayPart/:id/:receiveno', title: '物料组托信息', moduleId: 'app/spmMgt/SpmTrayPart' },
                { route: 'spmMgt/Part/SpmTrayPartDetail/:id', title: '物料组托信息2', moduleId: 'app/spmMgt/Part/SpmTrayPartDetail' },

                { route: 'spmMgt/SpmRepackageArtList', title: '翻包工艺管理', moduleId: 'app/spmMgt/SpmRepackageArtList' },
                { route: 'spmMgt/SpmRepackageArt/:id', title: '翻包工艺信息', moduleId: 'app/spmMgt/SpmRepackageArt' },
                { route: 'spmMgt/SpmRepackageArtAttachment/:id', title: '翻包工艺附件信息', moduleId: 'app/spmMgt/SpmRepackageArtAttachment' },
                { route: 'spmMgt/Part/SpmRepackageArtPart/:id', title: '翻包工艺与零件关系', moduleId: 'app/spmMgt/Part/SpmRepackageArtPart' },
                { route: 'spmMgt/Part/SpmRepackageArtPartImport/:id', title: '翻包工艺与零件关系导入', moduleId: 'app/spmMgt/Part/SpmRepackageArtPartImport' },
                { route: 'spmMgt/SpmRepackageArtAttachmentDetail/:id', title: '翻包工艺附件', moduleId: 'app/spmMgt/SpmRepackageArtAttachmentDetail' },

                { route: 'spmMgt/Part/SpmShelfInManage(/:status)', title: '料架入库管理', moduleId: 'app/spmMgt/Part/SpmShelfInManage' },
                { route: 'spmMgt/Part/SpmShelfIn/:id', title: '料架入库', moduleId: 'app/spmMgt/Part/SpmShelfIn' },
                { route: 'spmMgt/Part/SpmShelfInDetail/:id', title: '料架入库明细', moduleId: 'app/spmMgt/Part/SpmShelfInDetail' },
                { route: 'spmMgt/Part/SpmShelfList/:id', title: '料架库存', moduleId: 'app/spmMgt/Part/SpmShelfList' },
                { route: 'spmMgt/Part/SpmShelfOutManage(/:status)', title: '料架出库管理', moduleId: 'app/spmMgt/Part/SpmShelfOutManage' },
                { route: 'spmMgt/Part/SpmShelfOut/:id', title: '料架出库', moduleId: 'app/spmMgt/Part/SpmShelfOut' },
                { route: 'spmMgt/Part/SpmShelfOutDetail/:id', title: '料架出库明细', moduleId: 'app/spmMgt/Part/SpmShelfOutDetail' },
                { route: 'spmMgt/Part/SpmShelveStockList/:id', title: '料架库存明细', moduleId: 'app/spmMgt/Part/SpmShelveStockList' },
                { route: 'spmMgt/Part/SpmShelfInImport', title: '料架入库导入', moduleId: 'app/spmMgt/Part/SpmShelfInImport' },
                { route: 'spmMgt/Part/SpmShelfOutImport', title: '料架出库导入', moduleId: 'app/spmMgt/Part/SpmShelfOutImport' },
                { route: 'spmMgt/Part/SpmShelvePrint/:id', title: '料架编码打印', moduleId: 'app/spmMgt/Part/SpmShelvePrint' },

                { route: 'spmMgt/SpmRepackageList(/:status)', title: '翻包管理', moduleId: 'app/spmMgt/SpmRepackageList' },
                { route: 'spmMgt/SpmRepackage/:id', title: '翻包单信息', moduleId: 'app/spmMgt/SpmRepackage' },
                { route: 'spmMgt/SpmRepackageDetailList(/:pid)(/:status)', title: '翻包指导单', moduleId: 'app/spmMgt/SpmRepackageDetailList' },
                { route: 'spmMgt/SpmRepackageDetail/:id', title: '翻包信息', moduleId: 'app/spmMgt/SpmRepackageDetail' },
                { route: 'spmMgt/SpmRepackageTaskList/:id', title: '翻包台任务', moduleId: 'app/spmMgt/SpmRepackageTaskList' },
                { route: 'spmMgt/Part/PartPrint/:id', title: '防伪标签打印', moduleId: 'app/spmMgt/Part/PartPrint' },
                { route: 'spmMgt/Part/PartPrint02/:id', title: '防伪标签打印2', moduleId: 'app/spmMgt/Part/PartPrint02' },
                { route: 'spmMgt/Part/PartPrint03/:id', title: '防伪标签打印3', moduleId: 'app/spmMgt/Part/PartPrint03' },
                { route: 'spmMgt/Part/PartPrint01En/:id', title: '防伪标签打印En', moduleId: 'app/spmMgt/Part/PartPrint01En' },
                { route: 'spmMgt/Part/PartPrint02En/:id', title: '防伪标签打印2En', moduleId: 'app/spmMgt/Part/PartPrint02En' },
                { route: 'spmMgt/Part/PartPrint03En/:id', title: '防伪标签打印3En', moduleId: 'app/spmMgt/Part/PartPrint03En' },
                { route: 'spmMgt/SpmRepackageSheetPrint/:id', title: '翻包单打印', moduleId: 'app/spmMgt/SpmRepackageSheetPrint' },
                { route: 'spmMgt/SpmShelveList(/:status)', title: '上架管理', moduleId: 'app/spmMgt/SpmShelveList' },
                { route: 'spmMgt/SpmShelve/:id', title: '上架信息维护', moduleId: 'app/spmMgt/SpmShelve' },
                { route: 'spmMgt/SpmTransferList(/:status)', title: '移库管理', moduleId: 'app/spmMgt/SpmTransferList' },
                { route: 'spmMgt/SpmTransfer/:id', title: '移库信息维护', moduleId: 'app/spmMgt/SpmTransfer' },
                { route: 'spmMgt/Part/SpmMoveSheetDetail/:id', title: '移库明细', moduleId: 'app/spmMgt/Part/SpmMoveSheetDetail' },
                { route: 'spmMgt/Part/SpmTransferPrint/:id', title: '移库单打印', moduleId: 'app/spmMgt/Part/SpmTransferPrint' },

                { route: 'spmMgt/SpmStocksHoldList(/:status)', title: '库存冻结解冻管理', moduleId: 'app/spmMgt/SpmStocksHoldList' },
                { route: 'spmMgt/Part/SpmStocksHold/:id', title: '冻结信息维护', moduleId: 'app/spmMgt/Part/SpmStocksHold' },
                { route: 'spmMgt/Part/SpmHoldDetail/:id', title: '冻结明细', moduleId: 'app/spmMgt/Part/SpmHoldDetail' },
                { route: 'spmMgt/SpmPdaTaskManagementList(/:status)', title: 'PDA任务管理', moduleId: 'app/spmMgt/SpmPdaTaskManagementList' },

                { route: 'spmMgt/Part/SpmDiscardList(/:status)', title: '库存报废管理', moduleId: 'app/spmMgt/Part/SpmDiscardList' },
                { route: 'spmMgt/Part/SpmDiscard/:id', title: '报废信息维护', moduleId: 'app/spmMgt/Part/SpmDiscard' },

                { route: 'spmMgt/SpmSupplyDateList', title: '供应商供货日历管理', moduleId: 'app/spmMgt/SpmSupplyDateList' },
                { route: 'spmMgt/SpmSupplyDate/:id', title: '供应商供货日历信息维护', moduleId: 'app/spmMgt/SpmSupplyDate' },
                { route: 'spmMgt/SpmRoleAmountList', title: '审批角色金额管理', moduleId: 'app/spmMgt/SpmRoleAmountList' },
                { route: 'spmMgt/SpmRoleAmount/:id', title: '审批角色金额信息维护', moduleId: 'app/spmMgt/SpmRoleAmount' },

                { route: 'spmMgt/SpmPredictionDataList', title: 'Cep预测数据同步列表', moduleId: 'app/spmMgt/SpmPredictionDataList' },
                { route: 'spmMgt/SpmPredictionDataImport', title: 'Cep预测数据导入', moduleId: 'app/spmMgt/SpmPredictionDataImport' },

                { route: 'spmMgt/SpmReceiveGlobalList', title: '采购入库状态查询', moduleId: 'app/spmMgt/SpmReceiveGlobalList' },
                { route: 'spmMgt/SpmReceiveAllList', title: '收货综合查询', moduleId: 'app/spmMgt/SpmReceiveAllList' },
                { route: 'spmMgt/SpmRepackageAllList', title: '翻包综合查询', moduleId: 'app/spmMgt/SpmRepackageAllList' },
                { route: 'spmMgt/Part/SpmStockTransDetailLogList', title: '零件交易查询', moduleId: 'app/spmMgt/Part/SpmStockTransDetailLogList' },
                { route: 'spmMgt/Part/StockTransDetailLog', title: '零件交易查询', moduleId: 'app/spmMgt/Part/StockTransDetailLog' },
                { route: 'spmMgt/Part/SpmReceiveAbnormalQuery', title: '收货翻包差异查询', moduleId: 'app/spmMgt/Part/SpmReceiveAbnormalQuery' },
                { route: 'spmMgt/Part/SpmStocksNoPackList', title: '零件不满包装模数查询', moduleId: 'app/spmMgt/Part/SpmStocksNoPackList' },
                { route: 'spmMgt/Part/UnInBoxList', title: '拣配未合箱记录查询', moduleId: 'app/spmMgt/Part/UnInBoxList' },

                { route: 'spmMgt/SpmReceiveGen', title: '手工添加入库单', moduleId: 'app/spmMgt/SpmReceiveGen' },

                /****************************************************采购入库-结束*******************************************/
                /****************************************************整车销售预测-开始*******************************************/
                { route: 'VehCar/SalesForecastMgt/VehForecastSummaryList', title: '销售预测汇总', moduleId: 'app/VehCar/SalesForecastMgt/VehForecastSummaryList' },
                { route: 'VehCar/SalesForecastMgt/VehDealerReportingSummary', title: '经销商填报情况', moduleId: 'app/VehCar/SalesForecastMgt/VehDealerReportingSummary' },
                { route: 'VehCar/SalesForecastMgt/VehDealerReportingDetail/:forcastCycle', title: '经销商填报明细', moduleId: 'app/VehCar/SalesForecastMgt/VehDealerReportingDetail' },
                { route: 'VehCar/SalesForecastMgt/VehDealerReportingDetail', title: '经销商填报明细', moduleId: 'app/VehCar/SalesForecastMgt/VehDealerReportingDetail' },
                { route: 'VehCar/SalesForecastMgt/VehSplitDetail/:forcastCycle', title: '预测拆分详情', moduleId: 'app/VehCar/SalesForecastMgt/VehSplitDetail' },
                { route: 'VehCar/SalesForecastMgt/VehForecastAdjustment/:type', title: '提报GFO调整', moduleId: 'app/VehCar/SalesForecastMgt/VehForecastAdjustment' },
                { route: 'VehCar/SalesForecastMgt/VehForecastAdjustment/:type/:forcastCycle', title: '提报GFO调整', moduleId: 'app/VehCar/SalesForecastMgt/VehForecastAdjustment' },
                { route: 'VehCar/SalesForecastMgt/VehSalesPlan', title: '销售计划', moduleId: 'app/VehCar/SalesForecastMgt/VehSalesPlan' },
                { route: 'VehCar/SalesForecastMgt/VehSalesForecastList/:Types/:ForecastCycle', title: '预测汇总', moduleId: 'app/VehCar/SalesForecastMgt/VehSalesForecastList' },
                { route: 'vehCar/SalesForecastMgt/VehSalesForecastSumImport', title: '车辆数量汇总上传', moduleId: 'app/vehCar/SalesForecastMgt/VehSalesForecastSumImport' },
                { route: 'vehCar/SalesForecastMgt/VehSalesForecastWithinAbroadSumImport', title: '内外饰汇总上传', moduleId: 'app/vehCar/SalesForecastMgt/VehSalesForecastWithinAbroadSumImport' },
                { route: 'vehCar/SalesForecastMgt/VehSalesForecastOptionalSumImport', title: '选装汇总上传', moduleId: 'app/vehCar/SalesForecastMgt/VehSalesForecastOptionalSumImport' },
                /****************************************************整车销售预测-结束*******************************************/
                { route: 'vehCar/InWarehouseMgt/PrepareScan', title: '车辆预入库扫描', moduleId: 'app/vehCar/InWarehouseMgt/PrepareScan' },
                /****************************************************销售出库-开始*******************************************/
                { route: 'spmMgt/saleOut/SpmDealerPOList(/:status)', title: '经销商订单查询', moduleId: 'app/spmMgt/saleOut/SpmDealerPOList' },
                { route: 'spmMgt/saleOut/SpmDealerPODetailList/:id', title: '经销商订单明细查询', moduleId: 'app/spmMgt/saleOut/SpmDealerPODetailList' },
                { route: 'spmMgt/saleOut/SpmSOList(/:status)', title: 'SO单查询', moduleId: 'app/spmMgt/saleOut/SpmSOList' },
                { route: 'spmMgt/saleOut/SpmSODetailList/:id', title: '经销商订单明细查询', moduleId: 'app/spmMgt/saleOut/SpmSODetailList' },
                { route: 'spmMgt/saleOut/SpmOutputList(/:status)', title: 'SO单查询', moduleId: 'app/spmMgt/saleOut/SpmOutputList' },
                { route: 'spmMgt/saleOut/SpmOutputDetailList/:id', title: '经销商订单明细查询', moduleId: 'app/spmMgt/saleOut/SpmOutputDetailList' },
                { route: 'spmMgt/saleOut/PickCardList(/:status)', title: '拣配卡查询', moduleId: 'app/spmMgt/saleOut/PickCardList' },
                { route: 'spmMgt/saleOut/PickCardTaskDetailList/:id', title: '拣配推荐任务', moduleId: 'app/spmMgt/saleOut/PickCardTaskDetailList' },
                { route: 'spmMgt/saleOut/SpmPickBoxesList(/:status)', title: '拣配箱', moduleId: 'app/spmMgt/saleOut/SpmPickBoxesList' },
                { route: 'spmMgt/saleOut/SpmPickBoxesEdit/:id', title: '拣配箱编辑', moduleId: 'app/spmMgt/saleOut/SpmPickBoxesEdit' },
                { route: 'spmMgt/saleOut/SpmPickBoxTaskRelList/:id', title: '拣配箱任务', moduleId: 'app/spmMgt/saleOut/SpmPickBoxTaskRelList' },
                { route: 'spmMgt/saleOut/BoxingList(/:status)', title: '合箱查询', moduleId: 'app/spmMgt/saleOut/BoxingList' },
                { route: 'spmMgt/saleOut/OutMarksPrint/:id', title: '合箱打印', moduleId: 'app/spmMgt/saleOut/OutMarksPrint' },
                { route: 'spmMgt/saleOut/BoxingEdit/:id', title: '编辑合箱', moduleId: 'app/spmMgt/saleOut/BoxingEdit' },
                { route: 'spmMgt/saleOut/SpmBoxingDetail/:id', title: '合箱明细', moduleId: 'app/spmMgt/saleOut/SpmBoxingDetail' },
                { route: 'spmMgt/saleOut/BoxDetailR/:id', title: '合箱明细', moduleId: 'app/spmMgt/saleOut/BoxDetailR' },
                { route: 'spmMgt/saleOut/SpmBoxingDetailEdit/:id', title: '合箱明细编辑', moduleId: 'app/spmMgt/saleOut/SpmBoxingDetailEdit' },

                { route: 'spmMgt/Part/InternalMaterialList(/:status)', title: '内部领料单', moduleId: 'app/spmMgt/Part/InternalMaterialList' },
                { route: 'spmMgt/Part/InternalMaterial/:id', title: '内部领料单编辑', moduleId: 'app/spmMgt/Part/InternalMaterial' },
                { route: 'spmMgt/Part/InternalMaterialR/:id', title: '内部领料单编辑', moduleId: 'app/spmMgt/Part/InternalMaterialR' },
                { route: 'spmMgt/Part/InternalMaterialDetail/:id', title: '领料单明细', moduleId: 'app/spmMgt/Part/InternalMaterialDetail' },
                { route: 'spmMgt/Part/InternalMaterialDetailListALL/:id', title: '领料单下架明细', moduleId: 'app/spmMgt/Part/InternalMaterialDetailListALL' },
                { route: 'spmMgt/Part/SpmMoveLibraryList', title: '搬库列表', moduleId: 'app/spmMgt/Part/SpmMoveLibraryList' },
                { route: 'spmMgt/Part/SpmMoveLibrary/:id', title: '搬库列表', moduleId: 'app/spmMgt/Part/SpmMoveLibrary' },
                { route: 'spmMgt/Part/SpmMoveLibraryDetail/:id', title: '搬库列表', moduleId: 'app/spmMgt/Part/SpmMoveLibraryDetail' },
                { route: 'spmMgt/Part/SpmBorrowEndList', title: '借料结算列表', moduleId: 'app/spmMgt/Part/SpmBorrowEndList' },
                { route: 'spmMgt/Part/SpmBorrowEnd/:id', title: '借料结算', moduleId: 'app/spmMgt/Part/SpmBorrowEnd' },
                { route: 'spmMgt/Part/SpmBorrowEndDetail/:id', title: '借料结算明细', moduleId: 'app/spmMgt/Part/SpmBorrowEndDetail' },
                { route: 'spmMgt/Part/SpmBorrowEndPrint/:id', title: '借料结算单打印', moduleId: 'app/spmMgt/Part/SpmBorrowEndPrint' },
                { route: 'spmMgt/Part/InternalMaterialDetailList/:id', title: '明细', moduleId: 'app/spmMgt/Part/InternalMaterialDetailList' },
                { route: 'spmMgt/Part/InternalMaterialOutputPart/:id', title: '退料单还单明细', moduleId: 'app/spmMgt/Part/InternalMaterialOutputPart' },
                { route: 'spmMgt/Part/InternalMaterialNotOutputPart/:id', title: '不还料原因填写', moduleId: 'app/spmMgt/Part/InternalMaterialNotOutputPart' },
                { route: 'spmMgt/Part/InternalPickCardTaskDetailList/:id', title: '内部领料单拣配零件详情', moduleId: 'app/spmMgt/Part/InternalPickCardTaskDetailList' },
                { route: 'spmMgt/Part/InternalMaterialPrint/:id', title: '内部领料单打印', moduleId: 'app/spmMgt/Part/InternalMaterialPrint' },
                { route: 'spmMgt/Part/InternalMaterialListPrint/:id', title: '内部领料下架清单打印', moduleId: 'app/spmMgt/Part/InternalMaterialListPrint' },
                { route: 'spmMgt/Part/AllotOutList', title: '调拨出库', moduleId: 'app/spmMgt/Part/AllotOutList' },
                { route: 'spmMgt/Part/AllotOut/:id', title: '调拨出库单编辑', moduleId: 'app/spmMgt/Part/AllotOut' },
                { route: 'spmMgt/Part/AllotInList', title: '调拨入库', moduleId: 'app/spmMgt/Part/AllotInList' },

                { route: 'spmMgt/SpmRolePriceList', title: '价格管理', moduleId: 'app/spmMgt/SpmRolePriceList' },

                { route: 'spmMgt/SpmRolePrice/:id', title: '价格管理新增编辑', moduleId: 'app/spmMgt/SpmRolePrice' },
                /****************************************************销售出库-结束*******************************************/

                /****************************************************整车库存-开始*******************************************/
                { route: 'vehCar/basMgt/vehTransferList', title: '整车移库', moduleId: 'app/vehCar/basMgt/vehTransferList' },
                { route: 'VehCar/basMgt/vehTransfer/:id', title: '创建整车移库', moduleId: 'app/vehCar/basMgt/vehTransfer' },
                { route: 'VehCar/basMgt/RepairInfo/VehRepairInfoList', title: '返修登记管理', moduleId: 'app/vehCar/basMgt/RepairInfo/VehRepairInfoList' },
                { route: 'VehCar/basMgt/RepairInfo/VehRepairInfo/:id', title: '创建返修登记', moduleId: 'app/vehCar/basMgt/RepairInfo/VehRepairInfo' },
                { route: 'VehCar/basMgt/ReturnFactory/VehReturnFactoryList', title: '返厂登记管理', moduleId: 'app/VehCar/basMgt/ReturnFactory/VehReturnFactoryList' },
                { route: 'VehCar/basMgt/ReturnFactory/VehReturnFactory/:id', title: '创建返厂登记', moduleId: 'app/VehCar/basMgt/ReturnFactory/VehReturnFactory' },
                /****************************************************整车库存-结束*******************************************/

                /****************************************************整车销售-开始*******************************************/
                { route: 'vehCar/SalesOrder/VehSalesOrderList', title: '销售订单', moduleId: 'app/vehCar/SalesOrder/VehSalesOrderList' },
                { route: 'vehCar/PurchaseOrder/VehPurchaseOrderList', title: '采购订单', moduleId: 'app/vehCar/PurchaseOrder/VehPurchaseOrderList' },
                { route: 'vehCar/PurchaseOrder/VehPurchaseOrder', title: '创建采购订单', moduleId: 'app/vehCar/PurchaseOrder/VehPurchaseOrder' },
                { route: 'vehCar/PurchaseOrder/VehPurchaseOrderUpdate/:Id', title: '修改采购订单', moduleId: 'app/vehCar/PurchaseOrder/VehPurchaseOrderUpdate' },
                { route: 'vehCar/Matches/VehMatchesList', title: '批售配车', moduleId: 'app/vehCar/Matches/VehMatchesList' },
                { route: 'vehCar/Matches/VehMatchesAdd/:SONO/:PNO', title: '手动配车', moduleId: 'app/vehCar/Matches/VehMatchesAdd' },
                { route: 'vehCar/VehicleProfile/MdmVehicleProfileList', title: '车辆台账', moduleId: 'app/vehCar/VehicleProfile/MdmVehicleProfileList' },
                { route: 'vehCar/Matches/DeliveryOrderList', title: '生成交货单', moduleId: 'app/vehCar/Matches/DeliveryOrderList' },
                { route: 'vehCar/Matches/DeliveryOrderDetails/:Id', title: '交货单详情', moduleId: 'app/vehCar/Matches/DeliveryOrderDetails' },
                { route: 'vehCar/TransferOrder/TransferOrderDetails/:Id', title: '转储单详情', moduleId: 'app/vehCar/TransferOrder/TransferOrderDetails' },
                { route: 'vehCar/Matches/LockVehMatchesList', title: '锁车管理', moduleId: 'app/vehCar/Matches/LockVehMatchesList' },
                { route: 'vehCar/Reporting/ReportingProfileList', title: '经销商库龄汇总查询', moduleId: 'app/vehCar/Reporting/ReportingProfileList' },
                { route: 'vehCar/PurchaseOrder/VehPurchaseOrderImport', title: '采购订单批量导入修改', moduleId: 'app/vehCar/PurchaseOrder/VehPurchaseOrderImport' },
                { route: 'vehCar/PurchaseOrder/VehPurchaseOrderAddImport', title: '采购订单批量导入添加', moduleId: 'app/vehCar/PurchaseOrder/VehPurchaseOrderAddImport' },
                { route: 'vehCar/VehicleMaterial/VehicleMaterialList', title: '物料18码查询', moduleId: 'app/vehCar/VehicleMaterial/VehicleMaterialList' },

                { route: 'VehCar/WsOrder/VehWsOrder', title: '生成批售订单', moduleId: 'app/VehCar/WsOrder/VehWsOrder' },
                { route: 'VehCar/WsOrder/VehAdvanceOrder', title: '生成销售预测', moduleId: 'app/VehCar/WsOrder/VehAdvanceOrder' },
                /****************************************************整车销售-结束*******************************************/

                /****************************************************包材-开始*******************************************/
                { route: 'spmMgt/Package/SpmPackageTranList', title: '包材交易管理', moduleId: 'app/spmMgt/Package/SpmPackageTranList' },
                { route: 'spmMgt/Package/SpmPackageTran/:id', title: '包材交易单据', moduleId: 'app/spmMgt/Package/SpmPackageTran' },
                { route: 'spmMgt/Package/SpmPackageTranb/:id', title: '包材交易单据', moduleId: 'app/spmMgt/Package/SpmPackageTranb' },
                { route: 'spmMgt/Package/SpmPackageTranDetailList/:id', title: '包材交易单据明细', moduleId: 'app/spmMgt/Package/SpmPackageTranDetailList' },
                { route: 'spmMgt/Package/SpmPackageApplyPrint/:id', title: '包材交易申领单据打印', moduleId: 'app/spmMgt/Package/SpmPackageApplyPrint' },
                { route: 'spmMgt/Package/SpmPackageReturnPrint/:id', title: '包材交易退领单据打印', moduleId: 'app/spmMgt/Package/SpmPackageReturnPrint' },
                { route: 'spmMgt/Package/SpmPackageApplianceList', title: '包材信息查询', moduleId: 'app/spmMgt/Package/SpmPackageApplianceList' },
                /****************************************************包材-结束*******************************************/

                /****************************************************中转调拨-开始*******************************************/
                { route: 'vehCar/TransferOrder/GenerateTransferOrderList', title: '生成转储订单', moduleId: 'app/vehCar/TransferOrder/GenerateTransferOrderList' },
                { route: 'vehCar/TransferOrder/TransferOrderList', title: '转储订单列表', moduleId: 'app/vehCar/TransferOrder/TransferOrderList' },
                /****************************************************中转调拨-结束*******************************************/

                /****************************************************零件价格与价格组维护-开始*******************************************/
                { route: 'spmMgt/PartGroupProfitExtend/PartGroupProfitExtendList', title: '零件基础价格维护', moduleId: 'app/spmMgt/PartGroupProfitExtend/PartGroupProfitExtendList' },
                { route: 'spmMgt/PartGroupProfitExtend/PartGroupProfitExtends/:id', title: '零件价格与价格组新增', moduleId: 'app/spmMgt/PartGroupProfitExtend/PartGroupProfitExtends' },
                { route: 'spmMgt/PartGroupProfitExtend/PartGroupProfitExtendEdit/:id', title: '零件价格与价格组编辑', moduleId: 'app/spmMgt/PartGroupProfitExtend/PartGroupProfitExtendEdit' },
                { route: 'spmMgt/PartGroupProfitExtend/PartGroupProfitExtendImport', title: '零件基础价格导入', moduleId: 'app/spmMgt/PartGroupProfitExtend/PartGroupProfitExtendImport' },
                { route: 'spmMgt/SpmPartsGroupProfitExtendImport', title: '零件价格模拟导入', moduleId: 'app/spmMgt/SpmPartsGroupProfitExtendImport' },
                { route: 'spmMgt/SpmPartsGroupProfitExtendAdd/:id', title: '价格模拟新增', moduleId: 'app/spmMgt/SpmPartsGroupProfitExtendAdd' },
                /****************************************************零件价格与价格组维护-结束*******************************************/

                /****************************************************合箱区-开始*******************************************/
                { route: 'spmMgt/saleOut/SpmBoxRegionList', title: '合箱区配置', moduleId: 'app/spmMgt/saleOut/SpmBoxRegionList' },
                { route: 'spmMgt/saleOut/SpmBoxRegionEdit/:id', title: '合箱区修改', moduleId: 'app/spmMgt/saleOut/SpmBoxRegionEdit' },
                { route: 'spmMgt/saleOut/SpmBoxRegionDealerRefList/:id', title: '合箱区经销商关系', moduleId: 'app/spmMgt/saleOut/SpmBoxRegionDealerRefList' },
                /****************************************************合箱区-结束*******************************************/

                /****************************************************BO订单取消-开始*******************************************/
                { route: 'spmMgt/SpmBoOrderCancelList(/:status)', title: 'BO订单取消管理', moduleId: 'app/spmMgt/SpmBoOrderCancelList' },
                { route: 'spmMgt/SpmBoOrderCancelVerify/:id', title: 'BO订单取消批复', moduleId: 'app/spmMgt/SpmBoOrderCancelVerify' },
                { route: 'spmMgt/SpmBoOrderCancelDetail/:id', title: 'BO订单取消详情', moduleId: 'app/spmMgt/SpmBoOrderCancelDetail' },
                /****************************************************BO订单取消-结束*******************************************/

                /****************************************************委外计划-开始*******************************************/
                { route: 'spmOutsideCommissionedMgt/SpmOutsideCommissionedPlanList', title: '委外计划管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmOutsideCommissionedPlanList' },
                { route: 'spmOutsideCommissionedMgt/SpmOutsideCommissionedPlan/:id', title: '委外计划修改', moduleId: 'app/spmOutsideCommissionedMgt/SpmOutsideCommissionedPlan' },
                { route: 'spmOutsideCommissionedMgt/SpmOutsideCommissionedPlanDetail/:id', title: '委外计划明细', moduleId: 'app/spmOutsideCommissionedMgt/SpmOutsideCommissionedPlanDetail' },
                { route: 'spmOutsideCommissionedMgt/SpmOutsideCommissionedPlanDetails/:id/:OutsideCommissionedCode', title: '新增委外计划明细', moduleId: 'app/spmOutsideCommissionedMgt/SpmOutsideCommissionedPlanDetails' },
                { route: 'spmOutsideCommissionedMgt/SpmOutsidePlanImport', title: '委外计划导入', moduleId: 'app/spmOutsideCommissionedMgt/SpmOutsidePlanImport' },
                { route: 'spmOutsideCommissionedMgt/SpmEntrustPurchasePlan', title: '委外计划预测', moduleId: 'app/spmOutsideCommissionedMgt/SpmEntrustPurchasePlan' },
                { route: 'spmOutsideCommissionedMgt/SpmPickUpPlan', title: '取货计划管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmPickUpPlan' },
                /****************************************************委外计划-结束*******************************************/

                /****************************************************CRM嵌入页面-开始*******************************************/
                { route: 'crmView/UploadFileList/:isexp/:RegardingType/:RegardingKey(/:EndpointName)', title: '系统文件上传管理', moduleId: 'app/dialog/crmView/UploadFileList' },
                { route: 'crmView/UploadFile/:id/:isexp(/:EndpointName)', title: '系统文件信息', moduleId: 'app/crmView/UploadFile' },
                { route: 'crmView/RicheditorPage/:isexp/:RegardingType/:RegardingKey(/:EndpointName)', title: '富文本编辑器', moduleId: 'app/crmView/RicheditorPage' },
                /****************************************************CRM嵌入页面-结束*******************************************/

                /****************************************************委外订单-开始*******************************************/
                { route: 'spmOutsideCommissionedMgt/SpmEntrustOrderList', title: '委外订单管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmEntrustOrderList' },
                { route: 'spmOutsideCommissionedMgt/SpmEntrustOrderDetail/:id/:type', title: '委外订单明细', moduleId: 'app/spmOutsideCommissionedMgt/SpmEntrustOrderDetail' },
                //原材料订单与委外订单公用数据表
                { route: 'spmOutsideCommissionedMgt/SpmMaterialOrderList', title: '原材料订单管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialOrderList' },
                { route: 'spmOutsideCommissionedMgt/SpmEntrustReceiveGen/:id', title: '手工添加入库单', moduleId: 'app/spmOutsideCommissionedMgt/SpmEntrustReceiveGen' },
                { route: 'spmOutsideCommissionedMgt/SpmMaterialReceiveList(/:status)', title: '原材料入库单管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialReceiveList' },
                { route: 'spmOutsideCommissionedMgt/SpmMaterialShelveList(/:status)', title: '原材料上架管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialShelveList' },
                { route: 'spmOutsideCommissionedMgt/SpmMaterialShelve/:id', title: '原材料上架信息维护', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialShelve' },
                { route: 'spmOutsideCommissionedMgt/SpmMaterialReceiveNoticeList', title: '取货通知单管理', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialReceiveNoticeList' },
                { route: 'spmOutsideCommissionedMgt/SpmMaterialReceiveNoticeDetail/:id', title: '取货通知单明细', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialReceiveNoticeDetail' },
                { route: 'spmOutsideCommissionedMgt/SpmTrayPart/:id', title: '物料组托信息', moduleId: 'app/spmOutsideCommissionedMgt/SpmTrayPart' },
                { route: 'spmOutsideCommissionedMgt/SpmTrayPart/:id/:receiveno', title: '物料组托信息', moduleId: 'app/spmOutsideCommissionedMgt/SpmTrayPart' },
                { route: 'spmOutsideCommissionedMgt/SpmMNExpectArrival/:id', title: '填写预计到货时间', moduleId: 'app/spmOutsideCommissionedMgt/SpmMNExpectArrival' },
                { route: 'spmOutsideCommissionedMgt/SpmMaterialReceiveDetailList/:id', title: '收货入库零件明细', moduleId: 'app/spmOutsideCommissionedMgt/SpmMaterialReceiveDetailList' },
                /****************************************************委外订单-结束*******************************************/

                /****************************************************外采订单-开始*******************************************/
                { route: 'spmMgt/DspOutPurchaseList', title: '外采订单管理', moduleId: 'app/spmMgt/DspOutPurchaseList' },
                { route: 'spmMgt/DspOutPurchaseDetail/:id', title: '外采订单明细', moduleId: 'app/spmMgt/DspOutPurchaseDetail' },
                { route: 'spmMgt/DspOutPurchaseDetailVerify/:id', title: '外采订单批复', moduleId: 'app/spmMgt/DspOutPurchaseDetailVerify' },
                /****************************************************外采订单-结束*******************************************/

                /****************************************************报表-开始*******************************************/
                { route: 'supplierSalesReport/SupplierSalesReportList', title: '零件销售-可配置销售报表', moduleId: 'app/supplierSalesReport/SupplierSalesReportList' },
                { route: 'supplierSalesReport/DealerPurchaseOrderList', title: '零件销售-经销商采购订单明细报表', moduleId: 'app/supplierSalesReport/DealerPurchaseOrderList' },
                { route: 'supplierSalesReport/SupplierSalesTrack', title: '零件销售-经销商采购跟踪表', moduleId: 'app/supplierSalesReport/SupplierSalesTrack' },

                { route: 'supplierSalesReport/SDealerPurchaseOrderList', title: '经销商零件-采购订单明细', moduleId: 'app/supplierSalesReport/SDealerPurchaseOrderList' },
                /****************************************************报表-结束*******************************************/

                /****************************************************发运流程-开始*******************************************/
                { route: 'spmMgt/saleOut/SpmPackingOrderList', title: '装车单管理', moduleId: 'app/spmMgt/saleOut/SpmPackingOrderList' },
                { route: 'spmMgt/saleOut/SpmPackingOrder/:id', title: '装车单明细', moduleId: 'app/spmMgt/saleOut/SpmPackingOrder' },
                { route: 'spmMgt/saleOut/SpmPackingOrderBoxDetail/:id', title: '装车单零件明细', moduleId: 'app/spmMgt/saleOut/SpmPackingOrderBoxDetail' },

                { route: 'spmMgt/saleOut/SpmShippingOrderList', title: '承运单管理', moduleId: 'app/spmMgt/saleOut/SpmShippingOrderList' },
                { route: 'spmMgt/saleOut/SpmShippingOrder/:id', title: '承运单明细', moduleId: 'app/spmMgt/saleOut/SpmShippingOrder' },

                { route: 'spmMgt/saleOut/SpmOemOrderList', title: 'OEM出库单管理', moduleId: 'app/spmMgt/saleOut/SpmOemOrderList' },
                { route: 'spmMgt/saleOut/SpmOemOrderDetail/:id', title: 'OEM出库单明细管理', moduleId: 'app/spmMgt/saleOut/SpmOemOrderDetail' },
                /****************************************************发运流程-结束*******************************************/

                /****************************************************借料还料*******************************************/
                { route: 'spmMgt/Trans/SpmTransHeadList', title: '借料管理', moduleId: 'app/spmMgt/Trans/SpmTransHeadList' },
                { route: 'spmMgt/Trans/SpmTransHeadAdd/:id', title: '创建借料', moduleId: 'app/spmMgt/Trans/SpmTransHeadAdd' },
                { route: 'spmMgt/Trans/BorrowTransDetail/:id', title: '明细', moduleId: 'app/spmMgt/Trans/BorrowTransDetail' },
                { route: 'spmMgt/Trans/ReturnMaterialsList/:id', title: '明细', moduleId: 'app/spmMgt/Trans/ReturnMaterialsList' },
                { route: 'spmMgt/Trans/SpmTransHeadPrint/:id', title: '借料单打印', moduleId: 'app/spmMgt/Trans/SpmTransHeadPrint' },
                { route: 'spmMgt/Trans/StillSpmTransHeadList', title: '还料管理', moduleId: 'app/spmMgt/Trans/StillSpmTransHeadList' },
                { route: 'spmMgt/Trans/StillSpmTransHeadAdd/:id', title: '创建还料', moduleId: 'app/spmMgt/Trans/StillSpmTransHeadAdd' },
                { route: 'spmMgt/Trans/StillSpmTransHeadPrint/:id', title: '还料单打印', moduleId: 'app/spmMgt/Trans/StillSpmTransHeadPrint' },
                /****************************************************借料还料-结束*******************************************/

                /****************************************************冻结解冻-开始*******************************************/
                { route: 'spmMgt/FrozenThaw/FrozenList', title: '冻结管理', moduleId: 'app/spmMgt/FrozenThaw/FrozenList' },
                { route: 'spmMgt/FrozenThaw/FrozenAdd/:id', title: '创建冻结单', moduleId: 'app/spmMgt/FrozenThaw/FrozenAdd' },
                { route: 'spmMgt/FrozenThaw/FrozenOmLoc/:id', title: '创建冻结单', moduleId: 'app/spmMgt/FrozenThaw/FrozenOmLoc' },
                { route: 'spmMgt/FrozenThaw/ThawOmLoc/:id', title: '创建解冻单', moduleId: 'app/spmMgt/FrozenThaw/ThawOmLoc' },
                { route: 'spmMgt/FrozenThaw/FrozenDetail/:id', title: '冻结明细', moduleId: 'app/spmMgt/FrozenThaw/FrozenDetail' },
                { route: 'spmMgt/FrozenThaw/ThawList', title: '解冻管理', moduleId: 'app/spmMgt/FrozenThaw/ThawList' },
                { route: 'spmMgt/FrozenThaw/ThawAdd/:id', title: '创建解冻单', moduleId: 'app/spmMgt/FrozenThaw/ThawAdd' },
                { route: 'spmMgt/FrozenThaw/FrozenPrint/:id', title: '冻结打印', moduleId: 'app/spmMgt/FrozenThaw/FrozenPrint' },
                { route: 'spmMgt/FrozenThaw/ThawPrint/:id', title: '解冻打印', moduleId: 'app/spmMgt/FrozenThaw/ThawPrint' },
                /****************************************************冻结解冻-结束*******************************************/

                /****************************************************报废管理-开始*******************************************/
                { route: 'spmMgt/Scrap/ScrapList', title: '报废管理', moduleId: 'app/spmMgt/Scrap/ScrapList' },
                { route: 'spmMgt/Scrap/ScrapAdd/:id', title: '创建报废单', moduleId: 'app/spmMgt/Scrap/ScrapAdd' },
                { route: 'spmMgt/Scrap/ScrapRAdd/:id', title: '创建报废单', moduleId: 'app/spmMgt/Scrap/ScrapRAdd' },
                { route: 'spmMgt/Scrap/ScrapDetailList/:id', title: '报废单', moduleId: 'app/spmMgt/Scrap/ScrapDetailList' },
                { route: 'spmMgt/Scrap/ScrapPrint/:id', title: '报废单打印', moduleId: 'app/spmMgt/Scrap/ScrapPrint' },
                { route: 'spmMgt/Scrap/SpmRoleAmount/:id', title: '报废角色审批详情', moduleId: 'app/spmMgt/Scrap/SpmRoleAmount' },
                { route: 'spmMgt/Scrap/SpmRoleAmountList', title: '报废角色审批列表', moduleId: 'app/spmMgt/Scrap/SpmRoleAmountList' },
                /****************************************************报废管理-结束*******************************************/

                /****************************************************报损管理-开始*******************************************/
                { route: 'spmMgt/Scrap/ReportedLossList(/:status)', title: '报损管理', moduleId: 'app/spmMgt/Scrap/ReportedLossList' },
                { route: 'spmMgt/Scrap/ReportedLossAdd/:id', title: '创建报损单', moduleId: 'app/spmMgt/Scrap/ReportedLossAdd' },
                { route: 'spmMgt/Scrap/SpmRLossDetail/:id', title: '报损明细', moduleId: 'app/spmMgt/Scrap/SpmRLossDetail' },
                { route: 'spmMgt/Scrap/ReportedLossPrint/:id', title: '报损单打印', moduleId: 'app/spmMgt/Scrap/ReportedLossPrint' },
                /****************************************************报损管理-结束*******************************************/

                /****************************************************拆装管理-开始*******************************************/
                { route: 'spmMgt/Disassembly/DisassemblyList', title: '拆装管理', moduleId: 'app/spmMgt/Disassembly/DisassemblyList' },
                { route: 'spmMgt/Disassembly/SpmPartAssembleList', title: '拆装管理', moduleId: 'app/spmMgt/Disassembly/SpmPartAssembleList' },
                { route: 'spmMgt/Disassembly/AssembleBomDetail/:id', title: '组装', moduleId: 'app/spmMgt/Disassembly/AssembleBomDetail' },
                { route: 'spmMgt/Disassembly/AssembleOutDetail/:id', title: '组装', moduleId: 'app/spmMgt/Disassembly/AssembleOutDetail' },
                { route: 'spmMgt/Disassembly/DisassemblyPrint/:id', title: '组装打印', moduleId: 'app/spmMgt/Disassembly/DisassemblyPrint' },
                { route: 'spmMgt/Disassembly/SpmPartAssembleListPrint/:id', title: '组装下架清单打印', moduleId: 'app/spmMgt/Disassembly/SpmPartAssembleListPrint' },
                { route: 'spmMgt/Part/PartAssemble/:id', title: '创建组装单', moduleId: 'app/spmMgt/Part/PartAssemble' },
                { route: 'spmMgt/Disassembly/DisassemblyAdd/:id', title: '创建组装单', moduleId: 'app/spmMgt/Disassembly/DisassemblyAdd' },
                { route: 'spmMgt/Disassembly/RemovePieceAdd/:id', title: '创建拆件单', moduleId: 'app/spmMgt/Disassembly/RemovePieceAdd' },
                { route: 'spmMgt/Disassembly/RemovePrint/:id', title: '拆件打印', moduleId: 'app/spmMgt/Disassembly/RemovePrint' },
                /****************************************************拆装管理-结束*******************************************/


                /****************************************************主机厂退货-开始*******************************************/
                { route: 'spmMgt/refund/SpmRefundList(/:status)', title: '主机厂退货', moduleId: 'app/spmMgt/refund/SpmRefundList' },
                { route: 'spmMgt/refund/SpmRefundAdd/:id', title: '主机厂退货创建', moduleId: 'app/spmMgt/refund/SpmRefundAdd' },
                { route: 'spmMgt/refund/SpmRefundPrint/:id', title: '主机厂退货打印', moduleId: 'app/spmMgt/refund/SpmRefundPrint' },
                { route: 'spmMgt/refund/ChangeGoodsPrintA/:id', title: '主机厂退货打印', moduleId: 'app/spmMgt/refund/ChangeGoodsPrintA' },
                { route: 'spmMgt/refund/ChangeGoodsPrintB/:id', title: '主机厂退货打印', moduleId: 'app/spmMgt/refund/ChangeGoodsPrintB' },
                /****************************************************主机厂退货-结束*******************************************/

                /****************************************************主机厂换货-开始*******************************************/
                { route: 'spmMgt/refund/SpmExchangeList', title: '主机厂换货', moduleId: 'app/spmMgt/refund/SpmExchangeList' },
                { route: 'spmMgt/refund/SpmExchangeAdd/:id', title: '主机厂换货创建', moduleId: 'app/spmMgt/refund/SpmExchangeAdd' },
                { route: 'spmMgt/refund/SpmExchangePrint/:id', title: '主机厂换货打印', moduleId: 'app/spmMgt/refund/SpmExchangePrint' },
                /****************************************************主机厂换货-结束*******************************************/

                /****************************************************经销商预测零件管理-开始*******************************************/
                { route: 'spmMgt/DealerForecastPart/SpmDealerForecastPartList', title: '经销商预测零件管理', moduleId: 'app/spmMgt/DealerForecastPart/SpmDealerForecastPartList' },
                { route: 'spmMgt/DealerForecastPart/SpmDealerForecastPartImport', title: '经销商零件导入', moduleId: 'app/spmMgt/DealerForecastPart/SpmDealerForecastPartImport' },
                { route: 'spmMgt/DealerForecastPart/SpmDealerForecastPartAdd/:id', title: '经销商预测零件创建', moduleId: 'app/spmMgt/DealerForecastPart/SpmDealerForecastPartAdd' },
                /****************************************************经销商预测零件管理-结束*******************************************/

                /****************************************************经销商参数配置管理-开始*******************************************/
                { route: 'spmMgt/DealerPartConfigure/DealerPartConfigureList', title: '经销商参数配置管理', moduleId: 'app/spmMgt/DealerPartConfigure/DealerPartConfigureList' },
                { route: 'spmMgt/DealerPartConfigure/DealerPartConfigureAdd/:id', title: '经销商参数配置创建', moduleId: 'app/spmMgt/DealerPartConfigure/DealerPartConfigureAdd' },
                /****************************************************经销商参数配置管理-结束*******************************************/


                /*巡视管理*/
                { route: 'Inspect/TaskTypeList', title: '任务类型维护', moduleId: 'app/rgmMgt/Inspect/TaskTypeList' },
                { route: 'Inspect/TaskTypeItem/:id', title: '任务类型编辑', moduleId: 'app/rgmMgt/Inspect/TaskTypeItem' },
                { route: 'Inspect/TaskList', title: '任务维护', moduleId: 'app/rgmMgt/Inspect/TaskList' },
                { route: 'Inspect/TaskItem/:id', title: '任务编辑', moduleId: 'app/rgmMgt/Inspect/TaskItem' },
                { route: 'InspectList', title: '巡视检查', moduleId: 'app/rgmMgt/Inspect/InspectList2' },
                { route: 'InspectItem/:id', title: '巡视检查编辑', moduleId: 'app/rgmMgt/Inspect/InspectItem' },
                { route: 'InspectPlan/:month', title: '巡视计划', moduleId: 'app/rgmMgt/Plan/InspectPlan' },
                { route: 'InspectPlan', title: '巡视计划', moduleId: 'app/rgmMgt/Plan/InspectPlan' },
                { route: 'InspectPlan/:id', title: '巡视计划编辑', moduleId: 'app/rgmMgt/Plan/InspectPlanItem' },
                { route: 'AddInspectPlan', title: '新增计划', moduleId: 'app/rgmMgt/Plan/AddInspectPlanItem' },
                { route: 'EditPlanTask/:id', title: '编辑计划任务', moduleId: 'app/rgmMgt/Plan/EditPlanTask' },
                { route: 'PlanList', title: '计划列表', moduleId: 'app/rgmMgt/Plan/PlanList' },
                { route: 'JourneyList/:id', title: '行程单', moduleId: 'app/rgmMgt/Plan/JourneyList' },
                { route: 'JourneyListView/:id', title: '行程单', moduleId: 'app/rgmMgt/Plan/JourneyList' },
                { route: 'JourneyItem/:id', title: '巡视计划编辑', moduleId: 'app/rgmMgt/Plan/JourneyItem' },
                { route: 'Calendar/:month', title: '巡视计划', moduleId: 'app/rgmMgt/Plan/Calendar' },
                { route: 'AddPlanTask/:id/:month', title: '添加任务', moduleId: 'app/rgmMgt/Plan/AddPlanTask' },
                { route: 'Schedule/:id', title: '添加任务', moduleId: 'app/rgmMgt/Plan/Schedule' },
                { route: 'Inspect/Import/:taskid', title: '导入检查项', moduleId: 'app/rgmMgt/Inspect/InspectImport' },
                { route: 'Prepare', title: '巡视准备', moduleId: 'app/rgmMgt/Prepare/PrepareList' },
                { route: 'InspectAction', title: '现场巡视', moduleId: 'app/rgmMgt/Scene/InspectAction' },
                { route: 'Score/:id', title: '巡视打分', moduleId: 'app/rgmMgt/Scene/Score' },
                { route: 'Report/:id', title: '巡视报告', moduleId: 'app/rgmMgt/Scene/Report' },
                { route: 'ImprovementItem/:id', title: '新增或修改待改善项目', moduleId: 'app/rgmMgt/Scene/ImprovementItem' },
                { route: 'Improvement', title: '改善跟踪', moduleId: 'app/rgmMgt/Improvement/DealerList' },
                { route: 'ImprovementItemView/:id', title: '改善详情', moduleId: 'app/rgmMgt/Improvement/ImprovementItemView' },
                { route: 'Stat', title: '统计分析', moduleId: 'app/rgmMgt/Stat/Stat' },
                { route: 'AddImprovementByManager/:id', title: '新增改善项目', moduleId: 'app/rgmMgt/Improvement/AddImprovementTemp' },
                { route: 'TopTenList/:id', title: 'top10未提交改善项目', moduleId: 'app/rgmMgt/Improvement/TopTenList' },
                { route: 'AddMeasure/:baseid/:id/:dealerid', title: '添加改善项目', moduleId: 'app/rgmMgt/Improvement/AddMeasure' },
                { route: 'EditMeasure/:mid', title: '修改改善项目', moduleId: 'app/rgmMgt/Improvement/AddMeasure' },
                { route: 'TCalendar/:month', title: '巡视计划', moduleId: 'app/rgmMgt/Temp/Calendar' },
                { route: 'UpdateReason/:id', title: '修改原因', moduleId: 'app/rgmMgt/Plan/PlanUpdateReason' },
                { route: 'ImportHolidays', title: '导入节假日', moduleId: 'app/rgmMgt/Plan/ImportHolidays' },
                { route: 'CompleteImprovements/:id', title: '改善项目', moduleId: 'app/rgmMgt/Improvement/CompleteImpList' },
                { route: 'spmMgt/SpmCargoDamageLostList', title: '货损货差审批管理', moduleId: 'app/spmMgt/SpmCargoDamageLostList' },
                /*零件承运商*/
                { route: 'spmMgt/saleOut/SOCarrierList', title: '零件承运商管理', moduleId: 'app/spmMgt/saleOut/SOCarrierList' },
                { route: 'spmMgt/saleOut/SOCarrier/:id', title: '零件承运商信息', moduleId: 'app/spmMgt/saleOut/SOCarrier' },
                { route: 'spmMgt/saleOut/SOCarrierImport', title: '零件承运商导入', moduleId: 'app/spmMgt/saleOut/SOCarrierImport' },
                { route: 'spmMgt/saleOut/SOCarrierSceneRepresentList/:id', title: '零件驻场代表管理', moduleId: 'app/spmMgt/saleOut/SOCarrierSceneRepresentList' },
                { route: 'spmMgt/saleOut/SOCarrierSceneRepresent/:id/:carrierId', title: '零件驻场代表信息', moduleId: 'app/spmMgt/saleOut/SOCarrierSceneRepresent' },
                { route: 'spmMgt/SpmCloseParts', title: '零件关闭转换', moduleId: 'app/spmMgt/SpmCloseParts' },
                /*采购任务返利*/
                { route: 'spmMgt/saleOut/SpmPurchaseRebateExamItemList', title: '返利考核项目及权重设置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebateExamItemList' },
                { route: 'spmMgt/saleOut/SpmPurchaseRebateExamItem/:id', title: '添加/编辑返利考核项目', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebateExamItem' },
                { route: 'spmMgt/saleOut/SpmPurchaseRebateScoreIntervalList/:id', title: '考核项目给分设置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebateScoreIntervalList' },
                { route: 'spmMgt/saleOut/SpmPurchaseRebateScoreIntervalItem/:action/:id', title: '添加/编辑考核项目给分', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebateScoreIntervalItem' },
                { route: 'spmMgt/saleOut/SpmPurchaseRebateTotalScoreIntervalList', title: '返利率设置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebateTotalScoreIntervalList' },
                { route: 'spmMgt/saleOut/SpmPurchaseRebateTotalScoreIntervalItem/:id', title: '添加/编辑返利率', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebateTotalScoreIntervalItem' },
                { route: 'spmMgt/saleOut/SpmPurchaseRebate', title: '返利', moduleId: 'app/spmMgt/saleOut/SpmPurchaseRebate' },
                /*通知公告*/
                { route: 'spmMgt/SpmAnnouncementList', title: '经销商通知公告', moduleId: 'app/spmMgt/SpmAnnouncementList' },
                { route: 'spmMgt/SpmAnnouncement/:id', title: '添加/编辑经销商通知公告', moduleId: 'app/spmMgt/SpmAnnouncement' },
                /*运输线路管理-备件中心*/
                { route: 'spmMgt/SpmShipmentLineList', title: '运输线路管理', moduleId: 'app/spmMgt/SpmShipmentLineList' },
                { route: 'spmMgt/SpmShipmentLine/:id', title: '添加/编辑运输线路', moduleId: 'app/spmMgt/SpmShipmentLine' },
                { route: 'spmMgt/SpmShipmentLineImport', title: '导入运输线路', moduleId: 'app/spmMgt/SpmShipmentLineImport' },
                { route: 'spmMgt/CarrierBillPrint/:id', title: '打印承运单', moduleId: 'app/spmMgt/saleOut/CarrierBillPrint' },
                { route: 'spmMgt/SpmPromotionsPartDetail/:id', title: '添加/编辑促销零件', moduleId: 'app/spmMgt/SpmPromotionsPartDetail' },
                { route: 'spmMgt/SpmPromotionsDealerDetail/:id', title: '添加/编辑促销经销商', moduleId: 'app/spmMgt/SpmPromotionsDealerDetail' },
                /****************************************************外采订单-开始*******************************************/
                { route: 'spmMgt/DspTransferList', title: '调拨入库管理', moduleId: 'app/spmMgt/DspTransferList' },
                { route: 'spmMgt/DspTransferDetail/:id', title: '调拨入库明细', moduleId: 'app/spmMgt/DspTransferDetail' },
                { route: 'spmMgt/DspTransferVerify/:id', title: '调拨入库批复', moduleId: 'app/spmMgt/DspTransferVerify' },
                /****************************************************外采订单-结束*******************************************/
                { route: 'spmPurchaseMgt/print/:id/:existsPrice', title: '采购订单打印', moduleId: 'app/spmPurchaseMgt/SpmPurchaseOrderPrint' },
                { route: 'spmPurchaseMgt/print/:id', title: '采购订单打印', moduleId: 'app/spmPurchaseMgt/SpmPurchaseOrderPrint' },
                { route: 'spmOutsideCommissionedMgt/print/:id/:type', title: '委外订单打印', moduleId: 'app/spmOutsideCommissionedMgt/SpmEntrustOrderPrint' },
                { route: 'spmMgt/saleOut/DspReturnOrderList', title: '经销商退货', moduleId: 'app/spmMgt/saleOut/DspReturnOrderList' },
                { route: 'spmMgt/saleOut/DealerBalance', title: '经销商备件账户查询', moduleId: 'app/spmMgt/saleOut/DealerBalance' },
                /****************************************************保修预算*******************************************/
                { route: 'clmMgt/Budget/ClmBudgetList', title: '保修预算监控列表', moduleId: 'app/clmMgt/Host/ClmBudgetList' },
                { route: 'clmMgt/Budget/ClmBudgetItem/:id', title: '新增/修改保修预算监控', moduleId: 'app/clmMgt/Host/ClmBudgetItem' },
                { route: 'clmMgt/Budget/Import', title: '导入保修预算监控', moduleId: 'app/clmMgt/Host/ClmBudgetImport' },
                { route: 'spmMgt/saleOut/SpmDPOAgentOrder/:id', title: '代下定单', moduleId: 'app/spmMgt/saleOut/SpmDPOAgentOrder' },
                { route: 'clmMgt/Budget/ClmBudgetReport', title: '保修预算监控报表统计', moduleId: 'app/clmMgt/Host/ClmBudgetReport' },
                /****************************************************打印*******************************************/
                { route: 'clmMgt/Host/ClmPayToDealerPrint/:id', title: '付款申请单打印', moduleId: 'app/clmMgt/Host/ClmPayToDealerPrint' },
                { route: 'clmMgt/Host/ClmPayToDealerListPrint/:month/:no/:code/:status/:areaid', title: '付款申请单打印', moduleId: 'app/clmMgt/Host/ClmPayToDealerListPrint' },
                { route: 'clmMgt/Dealer/ClmPayToDealerListPrint/:month/:no/:code/:status/:areaid', title: '付款申请单打印', moduleId: 'app/clmMgt/Dealer/ClmPayToDealerListPrint' },
                { route: 'spmMgt/saleOut/OemOutputOrderPrint/:id/:dcode/:socode', title: '打印Oem出库单', moduleId: 'app/spmMgt/saleOut/OemOutputOrderPrint' },
                /****************************************************配置管理*******************************************/
                { route: 'sysMgt/MdmConfig', title: '系统参数配置', moduleId: 'app/sysMgt/MdmConfig' },
                { route: 'sysMgt/MdmConfigItem/:id', title: '添加/编辑系统参数', moduleId: 'app/sysMgt/MdmConfigItem' },
                /****************************************************保修受限车辆*******************************************/
                { route: 'clmMgt/Dealer/ClmSpecialVehicleSettingList', title: '保修受限车辆', moduleId: 'app/clmMgt/Dealer/ClmSpecialVehicleSettingList' },
                { route: 'clmMgt/Dealer/ClmSpecialVehicleSetting/:id', title: '保修受限车辆信息', moduleId: 'app/clmMgt/Dealer/ClmSpecialVehicleSetting' },
                { route: 'clmMgt/Dealer/ClmSpecialVehicleSettingDetail/:id', title: '保修受限车辆详情', moduleId: 'app/clmMgt/Dealer/ClmSpecialVehicleSettingDetail' },
                { route: 'clmMgt/Dealer/ClmSpecialVehicleSettingImport', title: '导入保修受限车辆信息', moduleId: 'app/clmMgt/Dealer/ClmSpecialVehicleSettingImport' },
                /****************************************************其他费用配置*******************************************/
                { route: 'clmMgt/Host/ClmOtherFeeList', title: '其他费用配置列表', moduleId: 'app/clmMgt/Host/ClmOtherFeeList' },
                { route: 'clmMgt/Host/ClmOtherFeeItem/:id', title: '添加/编辑其他费用配置', moduleId: 'app/clmMgt/Host/ClmOtherFeeItem' },
                { route: 'clmMgt/Host/ClmHighOpWarrantyList', title: '高级权限解锁配置', moduleId: 'app/clmMgt/Host/ClmHighOpWarrantyList' },
                /****************************************************经销商采购任务*******************************************/
                { route: 'spmMgt/SpmPurchaseTargetRetentionRateList', title: '经销商采购任务保有率配置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseTargetRetentionRateList' },
                { route: 'spmMgt/SpmPurchaseTargetRetentionRate/:id', title: '添加/编辑经销商采购任务保有率配置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseTargetRetentionRate' },
                { route: 'spmMgt/SpmPurchaseTargetList', title: '经销商采购任务配置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseTargetList' },
                { route: 'spmMgt/SpmPurchaseTarget/:id', title: '添加/编辑经销商采购任务配置', moduleId: 'app/spmMgt/saleOut/SpmPurchaseTarget' },
                { route: 'CalendarMore/:day', title: '单日任务列表', moduleId: 'app/rgmMgt/Plan/CalendarMore' },
                { route: 'ThisTimeImpList/:id', title: '本次改善项目', moduleId: 'app/rgmMgt/Improvement/ThisTimeImpList' },
                { route: 'HistoryImpList/:id', title: '历史未完成改善项目', moduleId: 'app/rgmMgt/Improvement/HistroyImpList' },
                { route: 'DealerImpList/:id', title: '经销商改善项目', moduleId: 'app/rgmMgt/Improvement/DealerImpList' },
                { route: 'ImpActionList/:id/:day', title: '经销商改善项目', moduleId: 'app/rgmMgt/Improvement/ImprovementAction' },
                { route: 'spmMgt/SpmShippingPriceList', title: '运费查询', moduleId: 'app/spmMgt/saleOut/SpmShippingOrderPriceList' },
                { route: 'spmMgt/saleOut/SpmPickLog', title: '捡货单综合查询', moduleId: 'app/spmMgt/saleOut/SpmPickLog' },
                { route: 'spmMgt/saleOut/SpmOutputLog', title: '出库综合查询', moduleId: 'app/spmMgt/saleOut/SpmOutputLog' },
                { route: 'spmMgt/saleOut/PickCardEdit/:id', title: '添加拣配卡', moduleId: 'app/spmMgt/saleOut/PickCardEdit' },
                { route: 'clmMgt/Host/ClmAuditScrapItem/:id', title: '旧件审计', moduleId: 'app/clmMgt/Host/ClmAuditScrapItem' },
                { route: 'clmMgt/Host/ClmAuditWarrantyInspectList', title: '保修审计检查项列表', moduleId: 'app/clmMgt/Host/ClmAuditWarrantyInspectList' },
                { route: 'clmMgt/Host/ClmAuditWarrantyInspectItem/:id', title: '保修审计检查项', moduleId: 'app/clmMgt/Host/ClmAuditWarrantyInspectItem' },
                { route: 'clmMgt/Host/ClmAuditPlanAction/:id', title: '保修审计计划', moduleId: 'app/clmMgt/Host/ClmAuditPlanAction' },
                { route: 'clmMgt/Host/ClmAuditDeductionList', title: '保修审计扣款检查表', moduleId: 'app/clmMgt/Host/ClmAuditDeductionList' },
                { route: 'clmMgt/Host/ClmAuditDeductionItem/:id', title: '保修审计扣款检查项', moduleId: 'app/clmMgt/Host/ClmAuditDeductionItem' },
                { route: 'clmMgt/Host/ClmAuditPrintReport/:id', title: '报告打印', moduleId: 'app/clmMgt/Host/ClmAuditReportPrint' },
                { route: 'spmOutsideCommissionedMgt/SpmPickUpPlanDetail/:id/:editFlag', title: '取货计划明细', moduleId: 'app/spmOutsideCommissionedMgt/SpmPickUpPlanDetail' },
                { route: 'spmMgt/saleOut/SpmSettlementList', title: '采购结算单列表', moduleId: 'app/spmMgt/saleOut/SpmSettlementList' },
                { route: 'spmMgt/saleOut/SpmSettlementDetailList/:id', title: '采购结算单明细', moduleId: 'app/spmMgt/saleOut/SpmSettlementDetailList' },
                { route: 'spmMgt/saleOut/SpmSettlementOrderList/:id', title: '采购结算单订单列表', moduleId: 'app/spmMgt/saleOut/SpmSettlementOrderList' },
                { route: 'spmMgt/saleOut/SpmSettlementOrderDetail/:id', title: '采购结算单订单明细', moduleId: 'app/spmMgt/saleOut/SpmSettlementOrderDetail' },
                { route: 'clmMgt/Host/ClmAuditAddSpecialFilter/:id', title: '添加特殊关注筛选', moduleId: 'app/clmMgt/Host/ClmAuditAddSpecialFilter' },
                { route: 'spmMgt/saleOut/DealerTransDetail', title: '经销商账户财务往来明细', moduleId: 'app/spmMgt/saleOut/DealerTransDetail' },
                { route: 'clmMgt/Host/ClmBudgetMonitor', title: '预算监控表', moduleId: 'app/clmMgt/Host/ClmBudgetMonitor' },
                { route: 'clmMgt/Host/ClmBudgetCostDistribution', title: '保修期内成本分布', moduleId: 'app/clmMgt/Host/ClmBudgetCostDistribution' },
                { route: 'spmMgt/saleOut/DspReturnOrderDetailList/:id', title: '经销商退货详情', moduleId: 'app/spmMgt/saleOut/DspReturnOrderDetailList' },
                { route: 'spmMgt/saleOut/DspReturnOrderAttachmentList/:id', title: '经销商退货附件', moduleId: 'app/spmMgt/saleOut/DspReturnOrderAttachmentList' },
                { route: 'spmMgt/saleOut/DealerExpressList', title: '经销商物流联系人配置列表', moduleId: 'app/spmMgt/saleOut/DealerExpressList' },
                { route: 'spmMgt/saleOut/DealerExpress/:id', title: '经销商物流联系人配置详情', moduleId: 'app/spmMgt/saleOut/DealerExpress' },
                { route: 'clmMgt/Dealer/ClmDealerExpressList', title: '经销商物流联系人配置列表', moduleId: 'app/clmMgt/Dealer/ClmDealerExpressList' },
                { route: 'clmMgt/Dealer/ClmDealerExpress/:id', title: '经销商物流联系人配置详情', moduleId: 'app/clmMgt/Dealer/ClmDealerExpress' },
                { route: 'clmMgt/Dealer/ClmWaybillPrint/:id', title: '运单打印', moduleId: 'app/clmMgt/Dealer/ClmWaybillPrint' },
                { route: 'spmMgt/SaleOut/DealerExpressImport', title: '经销商物流联系人导入', moduleId: 'app/spmMgt/SaleOut/DealerExpressImport' },
                { route: 'clmMgt/Host/ClmOutboundOrderPrint/:id', title: '主机厂零件出库打印', moduleId: 'app/clmMgt/Host/ClmOutboundOrderPrint' },
                { route: 'clmMgt/Host/ClmFreightList', title: '运费单价列表', moduleId: 'app/clmMgt/Host/ClmFreightList' },
                { route: 'clmMgt/Host/ClmFreight/:id', title: '运费单价设置', moduleId: 'app/clmMgt/Host/ClmFreight' },
                { route: 'clmMgt/Host/ClmShipmentLineImport', title: '运费单价导入', moduleId: 'app/clmMgt/Host/ClmShipmentLineImport' },
                { route: 'clmMgt/Host/ClmRepairRecord', title: 'VIN维修履历', moduleId: 'app/clmMgt/Host/ClmRepairRecord' },
                { route: 'spmMgt/saleOut/SpmOrderSwitchList', title: '订单转换开关', moduleId: 'app/spmMgt/saleOut/SpmOrderSwitchList' },
                { route: 'clmMgt/Host/ClmAutoAuditList', title: '自动审核列表', moduleId: 'app/clmMgt/Host/ClmAutoAuditList' },
                { route: 'clmMgt/Host/ClmAutoAudit/:id', title: '自动审核详情', moduleId: 'app/clmMgt/Host/ClmAutoAudit' },

                /****************************************************新能源*******************************************/
                { route: 'nevMgt/NevSubsidySettingList', title: '国地补配置管理列表', moduleId: 'app/nevMgt/NevSubsidySettingList' },
                { route: 'nevMgt/NevSubsidySetting/:id', title: '国地补配置管理信息', moduleId: 'app/nevMgt/NevSubsidySetting' },
                { route: 'nevMgt/NevSubsidyBuckSetting', title: '国地补配置管理信息', moduleId: 'app/nevMgt/NevSubsidyBuckSetting' },
                { route: 'nevMgt/NevSubsidyApplyList', title: '国地补申请列表', moduleId: 'app/nevMgt/NevSubsidyApplyList' },
                { route: 'nevMgt/NevSubsidyApply/:id', title: '国地补申请信息', moduleId: 'app/nevMgt/NevSubsidyApply' },

                /****************************************************备件新功能*******************************************/
                { route: 'spmMgt/PartNew/PartList', title: '备件主数据列表', moduleId: 'app/spmMgt/PartNew/PartList' },
                { route: 'spmMgt/PartNew/PartDetail/:id', title: '备件主数据详情', moduleId: 'app/spmMgt/PartNew/PartDetail' },
            ]);
        };
        var _BuildNav = function (args) {
            var rtv = [];
            var rtvDic = {};
            var curItemIndex = '';
            var preItemIndex = '';
            u.naviagtion.removeAll();
            ko.utils.arrayForEach(args, function (item) {
                curItemIndex = item['Index'];
                rtvDic[curItemIndex] = item;
                item['isActivate'] = false;
                item['Children'] = [];
                if (curItemIndex.length === 2) {
                    rtv.push(item);
                }
                else {
                    preItemIndex = curItemIndex.substr(0, curItemIndex.length - 2);
                    rtvDic[preItemIndex]['Children'].push(item);
                }
            });
            return rtv;
        };
        var u = {
            naviagtion: ko.observableArray([]),
            logined: ko.observable(false),
            showflash: ko.observable(true),
            info: {
                Account: ko.observable(),
                UserType: ko.observable(),
                Mobile: ko.observable(),
                Email: ko.observable(),
                Status: ko.observable(),
                DefaultWarehouse: ko.observable(),  //用户登录后获取到用户的默认仓库
                Warehouses: ko.observableArray(),       //用户有权限访问的所有仓库列表
                DealerId: ko.observable()       //用户所属经销商
            },
            changePwd: function () {
                app.showDialog('app/sysMgt/pwd')
                    .then(function (dialogResult) {

                    });
            },
            logoff: function () {

                utility.httpGet('Account/LogOff').always(function () {
                    u.logined(false);
                    store.remove('UserNaviagtion');
                    store.remove('UserInfo');
                    sessionStorage.removeItem("access_token");
                    window.location = "/";
                });

            },

            login: function (arg) {
                $.isLoading();
                utility.httpPost('/api/Account/Login', arg)
                    .done(function (data) {
                        var accessToken = data;
                        if (accessToken.access_token)
                            sessionStorage.setItem("access_token", accessToken.access_token);
                        u.getUserInfo();
                    }).fail(function (data) {
                        if (!data)
                            return;
                        if (data.responseJSON)
                            alert(data.responseJSON.Message);
                    }).always(function () {
                        $.isLoading("hide");
                    });
            },
            checkUser: function () {
                $.isLoading();
                console.info('checkUser in');
                var deferred = $.Deferred();
                var url = "/api/Account/GetUserInfo";

                var userId = sessionStorage.getItem("userId");
                if (userId)
                    url += "?userid=" + userId;
                utility.httpGet(url).done(function (data) {
                    ko.mapper.fromJS(data, {}, u.info);
                    if (!cm.client.showInCRM) {
                        var userMenu = sessionStorage.getItem("UserMenu");
                        if (userMenu) {
                            $.isLoading("hide");
                            var nav = _BuildNav(JSON.parse(userMenu));
                            ko.mapper.fromJS(nav, {}, u.naviagtion);
                            mapRouter();
                            u.logined(true);
                            u.showflash(false);
                            console.info('checkUser resolve(true)');
                            deferred.resolve(true);
                        }
                        else {
                            utility.httpGet("/odata/db/GetUserMenu()").done(function (data2) {
                                sessionStorage.setItem("UserMenu", JSON.stringify(data2.value));
                                $.isLoading("hide");
                                var nav = _BuildNav(data2.value);
                                ko.mapper.fromJS(nav, {}, u.naviagtion);
                                mapRouter();
                                u.logined(true);
                                u.showflash(false);
                                console.info('checkUser resolve(true)');
                                deferred.resolve(true);

                            }).fail(function (data) {
                                console.info('checkUser reject(false)' + JSON.stringify(data));
                                deferred.reject(false);
                            });
                        }
                    }
                    else {
                        $.isLoading("hide");
                        mapRouter();
                        u.logined(true);
                        u.showflash(false);
                        console.info('checkUser resolve(true)');
                        deferred.resolve(true);
                    }
                }).fail(function (data) {
                    console.info('checkUser reject(false)' + JSON.stringify(data));
                    deferred.reject(false);
                });

                console.info('checkUser out');
                return deferred.promise();
            },

            getUserInfo: function () {
                console.info('getUserInfo in');
                u.checkUser().done(function () {
                    router.navigate('');
                }).fail(function () {
                    router.navigate('login');
                });
            }
        };
        return u;
    });