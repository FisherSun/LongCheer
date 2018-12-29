using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using System.IO;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;

namespace BenQGuru.eMES.Web.Common
{
    public class SysTbStructure
    {
        public string ColumnName { get; set; }
        public string TypeName { get; set; }
        public string NullAble { get; set; }
    }
    public class NPOIExcelExport
    {
        public MemoryStream DataToExcel(dynamic data, string[] ColumnValue, string filePath, int? timeZone = null, List<SysTbStructure> tbGen = null)
        {
            XSSFWorkbook book = new XSSFWorkbook();

            NPOI.SS.UserModel.ISheet sheet = book.CreateSheet("Sheet1");

            NPOI.SS.UserModel.IRow row = sheet.CreateRow(0);
            for (int i = 0; i < ColumnValue.Length; i++)
            {
                row.CreateCell(i).SetCellValue(ColumnValue[i]);
            }
            var info = JsonConvert.DeserializeObject<ODataResponseList<dynamic>>(data);
            // var info = JsonHelper.Deserialize<ODataResponseList<dynamic>>(data);

            var lstData = info.Value;
            int sn = 0;
            int snCellIndex = 0;
            foreach (var item in lstData)
            {
                NPOI.SS.UserModel.IRow row2 = sheet.CreateRow(sn + 1);
                foreach (var k in item)
                {

                    if (tbGen == null)
                    {
                        row2.CreateCell(snCellIndex).SetCellValue(Convert.ToString(k.Value == null ? "" : k.Value));
                    }
                    else
                    {
                        var tbCol = tbGen.Find(u => u.ColumnName == k.Name);
                        if (tbCol != null)
                        {
                            if (CheckFieldType(tbCol.TypeName) == 1)
                            {
                                try
                                {
                                    row2.CreateCell(snCellIndex).SetCellValue(Convert.ToDouble(k.Value));
                                }
                                catch
                                {
                                    row2.CreateCell(snCellIndex).SetCellValue(Convert.ToString(k.Value == null ? "" : k.Value));
                                }
                            }
                            else if (CheckFieldType(tbCol.TypeName) == 2)
                            {
                                try
                                {
                                    //时间转换
                                    if (timeZone.HasValue && k.Value.Value != null)
                                    {
                                        DateTime dt;
                                        var flag = DateTime.TryParse(k.Value.Value.ToString(), out dt);
                                        if (flag)
                                        {
                                            k.Value = dt.AddHours(timeZone.Value).ToString();
                                        }
                                    }
                                    row2.CreateCell(snCellIndex).SetCellValue(k.Value);
                                }
                                catch
                                {
                                    row2.CreateCell(snCellIndex).SetCellValue(Convert.ToString(k.Value == null ? "" : k.Value));
                                }
                            }
                            else
                            {
                                row2.CreateCell(snCellIndex).SetCellValue(Convert.ToString(k.Value == null ? "" : k.Value));
                            }
                        }
                        else
                        {
                            row2.CreateCell(snCellIndex).SetCellValue(Convert.ToString(k.Value == null ? "" : k.Value));
                        }
                    }

                    snCellIndex++;
                }
                snCellIndex = 0;
                sn++;
            }

            MemoryStream ms = new MemoryStream();
            book.Write(ms);//write后，会关闭ms流

            MemoryStream ms1 = new MemoryStream();
            ms1.Write(ms.ToArray(), 0, ms.ToArray().Length);//此处将流放入新流
            ms1.Position = 0;//定位到开始
            book = null;
            return ms1;
        }

        public MemoryStream DataToExcel<T>(List<T> dataList, List<string> titles, List<string> columns, int? timeZone = null)
        {
            XSSFWorkbook book = new XSSFWorkbook();

            NPOI.SS.UserModel.ISheet sheet = book.CreateSheet("Sheet1");

            NPOI.SS.UserModel.IRow firstRow = sheet.CreateRow(0);
            for (int i = 0; i < titles.Count; i++)
            {
                firstRow.CreateCell(i).SetCellValue(titles[i]);
            }

            int cellRow = 1;
            int cellColumn = 0;
            foreach (var data in dataList)
            {
                NPOI.SS.UserModel.IRow row = sheet.CreateRow(cellRow);
                foreach (var column in columns)
                {
                    //使用反射动态获取属性值
                    var type = data.GetType();
                    var propertyInfo = type.GetProperty(column);
                    var propertyValue = propertyInfo.GetValue(data);

                    if (propertyValue == null)
                    {
                    }
                    else if (propertyInfo.PropertyType == typeof(long) ||
                        propertyInfo.PropertyType == typeof(int) ||
                        propertyInfo.PropertyType == typeof(double) ||
                        propertyInfo.PropertyType == typeof(decimal) ||
                        propertyInfo.PropertyType == typeof(float))
                    {
                        row.CreateCell(cellColumn).SetCellValue(Convert.ToDouble(propertyValue));
                    }
                    else if (timeZone != null && (propertyInfo.PropertyType == typeof(DateTime) || propertyInfo.PropertyType == typeof(DateTime?)))
                    {
                        row.CreateCell(cellColumn).SetCellValue(Convert.ToDateTime(propertyValue).AddHours(timeZone.Value).ToString());
                    }
                    else
                    {
                        row.CreateCell(cellColumn).SetCellValue(Convert.ToString(propertyValue));
                    }

                    cellColumn++;
                }
                cellColumn = 0;
                cellRow++;
            }

            MemoryStream ms = new MemoryStream();
            book.Write(ms);//write后，会关闭ms流

            MemoryStream ms1 = new MemoryStream();
            ms1.Write(ms.ToArray(), 0, ms.ToArray().Length);//此处将流放入新流
            ms1.Position = 0;//定位到开始
            book = null;
            return ms1;
        }

        private int CheckFieldType(string fieldType)
        {
            switch (fieldType)
            {
                case "bigint":
                    return 1;
                case "int":
                    return 1;
                case "numeric":
                    return 1;
                case "decimal":
                    return 1;
                case "float":
                    return 1;
                case "datetime":
                    return 2;
                default:
                    return 0;
            }
        }
        /// <summary>
        /// 导出流
        /// </summary>
        /// <param name="tableJson"></param>
        /// <param name="ColumnValue"></param>
        /// <returns></returns>
        public MemoryStream DataToStream(string tableJson, string ColumnValue)
        {
            XSSFWorkbook book = new XSSFWorkbook();
            ICellStyle headerStyle = GetHeaderStyle(book);
            ICellStyle normalStyle = GetNormalStyle(book);

            ISheet sheet = book.CreateSheet("Sheet1");

            IRow row0 = sheet.CreateRow(0);
            string[] arrHeader = ColumnValue.Split(',');
            for (int i = 0; i < arrHeader.Length; i++)
            {
                ICell cell = row0.CreateCell(i, CellType.String);
                cell.SetCellValue(arrHeader[i]);
                cell.CellStyle = headerStyle;
            }

            var odata = JsonHelper.Deserialize<ODataResponseList<dynamic>>(tableJson);
            int rowIndex = 0;
            foreach (var item in odata.Value)
            {
                IRow row = sheet.CreateRow(rowIndex + 1);
                int cellIndex = 0;
                foreach (var kv in item)
                {
                    ICell cell = row.CreateCell(cellIndex);
                    cell.SetCellValue(Convert.ToString(kv.Value == null ? "" : kv.Value));
                    cell.CellStyle = normalStyle;
                    cellIndex++;
                }
                rowIndex++;
            }

            //列宽自适应，只对英文和数字有效
            for (int i = 0; i <= rowIndex; i++)
            {
                sheet.AutoSizeColumn(i);
            }

            MemoryStream ms = new MemoryStream();
            book.Write(ms);//write后，会关闭ms流

            MemoryStream ms1 = new MemoryStream();
            ms1.Write(ms.ToArray(), 0, ms.ToArray().Length);//此处将流放入新流
            ms1.Position = 0;//定位到开始
            book = null;
            return ms1;
        }

        public MemoryStream SpmPartsSalesForecastDataToStream(string tableJson, string ColumnValue)
        {
            XSSFWorkbook book = new XSSFWorkbook();
            ICellStyle headerStyle = GetHeaderStyle(book);
            ICellStyle normalStyle = GetNormalStyle(book);

            ISheet sheet = book.CreateSheet("Sheet1");

            IRow row0 = sheet.CreateRow(0);
            string[] arrHeader = ColumnValue.Split(',');
            for (int i = 0; i < arrHeader.Length; i++)
            {
                ICell cell = row0.CreateCell(i, CellType.String);
                cell.SetCellValue(arrHeader[i]);
                cell.CellStyle = headerStyle;
            }

            var odata = JsonHelper.Deserialize<ODataResponseList<dynamic>>(tableJson);
            int rowIndex = 0;
            foreach (var item in odata.Value)
            {
                IRow row = sheet.CreateRow(rowIndex + 1);
                int cellIndex = 0;
                foreach (var kv in item)
                {
                    ICell cell = row.CreateCell(cellIndex);
                    //cell.SetCellFormula
                    cell.SetCellValue(Convert.ToString(kv.Value == null ? "" : kv.Value));
                    //cell.CellType = CellType.Formula;
                    cell.CellStyle = normalStyle;
                    cellIndex++;
                }
                rowIndex++;
            }

            //列宽自适应，只对英文和数字有效
            for (int i = 0; i <= rowIndex; i++)
            {
                sheet.AutoSizeColumn(i);
            }

            MemoryStream ms = new MemoryStream();
            book.Write(ms);//write后，会关闭ms流

            MemoryStream ms1 = new MemoryStream();
            ms1.Write(ms.ToArray(), 0, ms.ToArray().Length);//此处将流放入新流
            ms1.Position = 0;//定位到开始
            book = null;
            return ms1;
        }

        public MemoryStream DataToExcelWithConvertData(dynamic data, string[] ColumnValue, string filePath)
        {
            XSSFWorkbook book = new XSSFWorkbook();

            NPOI.SS.UserModel.ISheet sheet = book.CreateSheet("Sheet1");

            NPOI.SS.UserModel.IRow row = sheet.CreateRow(0);
            for (int i = 0; i < ColumnValue.Length; i++)
            {
                row.CreateCell(i).SetCellValue(ColumnValue[i]);
            }
            var info = JsonConvert.DeserializeObject<ODataResponseList<dynamic>>(data);
            // var info = JsonHelper.Deserialize<ODataResponseList<dynamic>>(data);
            var lstData = info.Value;
            int sn = 0;
            int snCellIndex = 0;
            foreach (var item in lstData)
            {
                NPOI.SS.UserModel.IRow row2 = sheet.CreateRow(sn + 1);
                foreach (var k in item)
                {
                    Type t = k.GetType();
                    // 获取类的所有公共属性
                    System.Reflection.PropertyInfo[] pInfo = t.GetProperties();
                    row2.CreateCell(snCellIndex).SetCellValue(Convert.ToString(k.Value == null ? "" : k.Value));
                    snCellIndex++;
                }
                snCellIndex = 0;
                sn++;
            }

            MemoryStream ms = new MemoryStream();
            book.Write(ms);//write后，会关闭ms流

            MemoryStream ms1 = new MemoryStream();
            ms1.Write(ms.ToArray(), 0, ms.ToArray().Length);//此处将流放入新流
            ms1.Position = 0;//定位到开始
            book = null;
            return ms1;
        }

        #region 样式区
        /// <summary>
        /// 获取首行标题样式
        /// </summary>
        /// <returns></returns>
        private ICellStyle GetHeaderStyle(XSSFWorkbook book)
        {
            //样式
            ICellStyle style = book.CreateCellStyle();
            //居中展示
            style.Alignment = HorizontalAlignment.Center;
            style.VerticalAlignment = VerticalAlignment.Center;
            style.BorderBottom = BorderStyle.Thin;
            style.BottomBorderColor = IndexedColors.Black.Index;
            style.BorderTop = BorderStyle.Thin;
            style.TopBorderColor = IndexedColors.Black.Index;
            style.BorderLeft = BorderStyle.Thin;
            style.LeftBorderColor = IndexedColors.Black.Index;
            style.BorderRight = BorderStyle.Thin;
            style.RightBorderColor = IndexedColors.Black.Index;

            style.FillForegroundColor = IndexedColors.Violet.Index;
            style.FillPattern = FillPattern.SolidForeground;
            style.WrapText = true;//是否自动换行

            //字体
            IFont font = book.CreateFont();
            font.FontName = "微软雅黑";
            font.Color = IndexedColors.White.Index;
            font.FontHeightInPoints = 10;//字体大小
            style.SetFont(font);
            return style;
        }

        private ICellStyle GetNormalStyle(XSSFWorkbook book)
        {
            //样式
            ICellStyle style = book.CreateCellStyle();
            //居中展示
            style.Alignment = HorizontalAlignment.Center;
            style.VerticalAlignment = VerticalAlignment.Center;

            style.Alignment = HorizontalAlignment.Center;
            style.VerticalAlignment = VerticalAlignment.Center;
            style.BorderBottom = BorderStyle.Thin;
            style.BottomBorderColor = IndexedColors.Black.Index;
            style.BorderTop = BorderStyle.Thin;
            style.TopBorderColor = IndexedColors.Black.Index;
            style.BorderLeft = BorderStyle.Thin;
            style.LeftBorderColor = IndexedColors.Black.Index;
            style.BorderRight = BorderStyle.Thin;
            style.RightBorderColor = IndexedColors.Black.Index;
            style.WrapText = true;

            //字体
            IFont font = book.CreateFont();
            font.FontName = "微软雅黑";
            font.Color = IndexedColors.Black.Index;
            font.FontHeightInPoints = 10;//字体大小
            style.SetFont(font);
            return style;
        }
        #endregion


    }
}
