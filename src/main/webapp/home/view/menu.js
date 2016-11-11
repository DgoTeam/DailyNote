/**
 * home top menu - widget.homeMenu
 */
Ext.define('home.view.menu', {
	extend : 'Ext.toolbar.Toolbar',
	
	alias: 'widget.homeMenu',
	
	initComponent : function(){
		Ext.apply(this, {
			items : [{
				xtype: 'splitbutton',
				text : '財務管理',
				menu : [{
					text : '帳戶建立'
				},
				{
					text : '類別管理'
				},
				{
					text : '帳目明細維護'
				},
				{
					text : '報表'
				}]
			},'-',
			{
				xtype: 'splitbutton',
				text : '健身管理',
				menu : [{
					text : '健身計畫'
				},
				{
					text : '健身2'
				}]
			},'-',
			{
				xtype: 'splitbutton',
				text : '旅遊管理',
				menu : [{
					text : '旅遊1'
				},
				{
					text : '旅遊2'
				}]
			},'-',
			{
				xtype: 'splitbutton',
				text : '基本資料管理',
				menu : [{
					text : '資料1'
				},
				{
					text : '資料2'
				}]
			},'->',
			{
				text : '登出',
				action : 'logout'
			}]
		});
		
		this.callParent(arguments);
	}
	
});