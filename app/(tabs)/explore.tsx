import { StyleSheet, Alert } from 'react-native';
import { ListPage, ListItem } from '@/components/ListPage';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const sampleData: ListItem[] = [
  {
    id: '1',
    title: '移动端应用开发指南',
    tags: ['React Native', '移动开发', '跨平台'],
    summary: '详细介绍如何使用React Native开发高质量的移动应用，包括性能优化、UI设计和原生功能集成等关键技术要点。',
    icon: 'hotjar'
  },
  {
    id: '2',
    title: 'TypeScript最佳实践',
    tags: ['TypeScript', '前端开发', '代码规范'],
    summary: '分享TypeScript开发中的常见模式和最佳实践，帮助团队提高代码质量和开发效率，减少运行时错误。',
    icon: 'code'
  },
  {
    id: '3',
    title: 'UI/UX设计原则',
    tags: ['设计', 'UI', 'UX', '用户体验'],
    summary: '深入探讨现代应用设计的核心原则，包括色彩搭配、布局设计、交互动效和可访问性等设计要素。',
    icon: 'paintbrush'
  },
  {
    id: '4',
    title: '性能监控与优化',
    tags: ['性能优化', '监控', '调试'],
    summary: '介绍应用性能监控的工具和方法，以及常见的性能问题诊断和优化策略，提升用户体验。',
    icon: 'chart.bar'
  },
  {
    id: '5',
    title: 'API设计与文档',
    tags: ['API', '后端开发', '文档'],
    summary: '详细说明RESTful API的设计规范和最佳实践，包括接口设计、错误处理、版本管理和文档维护。',
    icon: 'globe'
  }
];

export default function TabTwoScreen() {
  const handleItemPress = (item: ListItem) => {
    Alert.alert('项目选中', `你选择了: ${item.title}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Hotop</ThemedText>
      </ThemedView>
      <ListPage
        items={sampleData}
        onItemPress={handleItemPress}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginBottom: 8,
  },
});
