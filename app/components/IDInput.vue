<!-- components/Input/index.vue -->
<script setup lang="ts">
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const rawInput = defineModel<string>();

const props = defineProps({
    title: {
        type: String,
        default: "ID Input",
    },
    totalCount: {
        type: Number,
        default: 0,
    },
    separators: {
        type: Array,
        default: () => [],
    },
});

const focusTextarea = () => {
    textareaRef.value?.focus();
};

defineExpose({
    focusTextarea,
});
</script>

<template>
    <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden"
    >
        <div
            class="flex items-center justify-between border-b border-gray-200 bg-gray-50 ps-3 overflow-hidden"
        >
            <h2 class="text-lg font-medium text-gray-700">{{ props.title }}</h2>
            <!-- <div class="flex items-center gap-0">
                <PasteButton :target="target" @request-focus="focusTextarea" />
                <FileUploader :target="target" />
            </div> -->
        </div>

        <textarea
            ref="textareaRef"
            v-model="rawInput"
            class="w-full min-h-80 p-3 border-0 focus:ring-0 resize-none flex-1"
            placeholder="输入或上传名单，支持文本 / 表格 / 图片。"
        />

        <div
            class="flex justify-between items-center border-t border-gray-200 bg-gray-50 text-sm"
        >
            <SeperatorModal :total-count="props.totalCount" />
            <div
                class="flex items-center justify-end [&>*:first-child]:ps-6 [&>*:last-child]:pe-3"
            >
                <slot name="stats" />
            </div>
        </div>
    </div>
</template>
