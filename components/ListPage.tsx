import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const iconMap = {
  热: 'https://simg.s.weibo.com/moter/flags/1_0.png',
  新: 'https://simg.s.weibo.com/moter/flags/2_0.png',
}

export interface ListItem {
  word?: string;
  word_scheme?: string;
  num?: number;
  icon_desc?: string;
  rank?: string;
  category?: string;
  description?: string;
}

interface ListPageProps {
  items: ListItem[];
  onItemPress?: (item: ListItem) => void;
}

export function ListPage({ items, onItemPress }: ListPageProps) {
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => {
        const imgSrc = iconMap[item.icon_desc || '']
        return <TouchableOpacity
          key={index}
          onPress={() => onItemPress?.(item)}
          activeOpacity={0.7}
        >
          <ThemedView style={styles.listItem}>
            {/* 第一行：序号 + 标题 + 图标 */}
            <ThemedView style={styles.titleRow}>
              <ThemedText style={styles.number}>{index + 1}</ThemedText>
              <ThemedText style={styles.title} numberOfLines={1}>
                {item.word}
              </ThemedText>
              {imgSrc && (
                <Image source={{ uri: imgSrc }}
                  style={{ width: 28, height: 28 }} />
              )}
            </ThemedView>

            {/* 第二行：标签 */}
            {item.category && <ThemedView style={styles.tagsContainer}>
              <ThemedView style={styles.tag}>
                <ThemedText style={styles.tagText}>{item.category}</ThemedText>
              </ThemedView>
            </ThemedView>}

            {/* 第三行：摘要 */}
            {item.description && <ThemedText style={styles.summary} numberOfLines={2}>
              {item.description}
            </ThemedText>}
          </ThemedView>
        </TouchableOpacity>
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  number: {
    color: '#ff6900',
    fontSize: 18,
    fontWeight: '800',
  },
  title: {
    // flex: 1,
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  summary: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
});