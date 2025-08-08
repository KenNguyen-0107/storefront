import { IParser } from "@/packages/cms-adapter-core/src/interfaces/IParser";
import { WidgetBlock } from "./blocks.types";

export class ConfigureCommerceParser implements IParser {
  parseBlocks(jsonDataInput: any): WidgetBlock[] {
    const widgets = this.extractWidgets(jsonDataInput);
    return this.buildWidgetHierarchy(widgets);
  }

  parsePageMetadata(jsonDataInput: any): Record<string, any> {
    const pageData = this.extractPageData(jsonDataInput);
    return {
      id: pageData?.Id,
      url: pageData?.Url,
      name: pageData?.Name,
      title: pageData?.Title,
      __typename: pageData?.__typename,
    };
  }

  parseTopHeaderBlocks(jsonDataInput: any): any[] {
    // For now, return empty array - can be extended based on requirements
    return [];
  }

  parseNavigationBlocks(jsonDataInput: any): any[] {
    // For now, return empty array - can be extended based on requirements
    return [];
  }

  parseFooterBlocks(jsonDataInput: any): any[] {
    // For now, return empty array - can be extended based on requirements
    return [];
  }

  parseSetting(jsonDataInput: any): Record<string, any> {
    // For now, return empty object - can be extended based on requirements
    return {};
  }

  private extractWidgets(data: any): any[] {
    // Find the first page type that has items with WidgetContainer
    const pageTypes = Object.keys(data);
    for (const pageType of pageTypes) {
      const pageItems = data[pageType]?.items;
      if (pageItems && Array.isArray(pageItems) && pageItems.length > 0) {
        const firstItem = pageItems[0];
        const widgetContainer = firstItem?.WidgetContainer;
        if (widgetContainer?.Widgets && Array.isArray(widgetContainer.Widgets)) {
          return widgetContainer.Widgets;
        }
      }
    }
    return [];
  }

  private extractPageData(data: any): any {
    const pageTypes = Object.keys(data);
    for (const pageType of pageTypes) {
      const pageItems = data[pageType]?.items;
      if (pageItems && Array.isArray(pageItems) && pageItems.length > 0) {
        return pageItems[0];
      }
    }
    return null;
  }

  private buildWidgetHierarchy(widgets: any[]): WidgetBlock[] {
    // Create a map of widgets by ID for quick lookup
    const widgetMap = new Map<string, any>();
    widgets.forEach((widget) => {
      widgetMap.set(widget.Id, widget);
    });

    // Find root widgets (those with ParentId matching the page ID or specific patterns)
    const rootWidgets = widgets.filter((widget) => {
      // Filter for Basic/Row widgets that are likely sections
      return widget.Type === "Basic/Row";
    });

    // Build the hierarchy by finding children for each root widget
    return rootWidgets.map((widget) => {
      return this.buildWidgetTree(widget, widgetMap);
    });
  }

  private buildWidgetTree(widget: any, widgetMap: Map<string, any>): WidgetBlock {
    const children = this.findChildren(widget.Id, widgetMap);

    return {
      ...widget,
      children: children.map((child) => this.buildWidgetTree(child, widgetMap)),
    };
  }

  private findChildren(parentId: string, widgetMap: Map<string, any>): any[] {
    const children: any[] = [];

    for (const [id, widget] of widgetMap.entries()) {
      if (widget.ParentId === parentId) {
        children.push(widget);
      }
    }

    // Sort children by some criteria if needed (e.g., Zone, SortOrder, etc.)
    //return children.sort((a, b) => {
    // Sort by Zone first, then by other criteria
    //const zoneA = a.Zone || "";
    //const zoneB = b.Zone || "";
    //if (zoneA !== zoneB) {
    //return zoneA.localeCompare(zoneB);
    //}

    // If zones are the same, sort by some other criteria
    //return 0;
    //});
    return children;
  }
}
